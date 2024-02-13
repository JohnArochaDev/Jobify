import { Container } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState, useEffect } from "react"
import './Applied.css'
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import { removeJob, updateJob } from "../../api/jobs";
const axios = require('axios');


export default function Applied({ user }) {

  let data = '';

  const [savedJobs, setSavedJobs] = useState(null)
  const [appliedJobs, setAppliedJobs] = useState(null)
  const [interviewJobs, setInterviewJobs] = useState(null)
  const [rejectedJobs, setRejectedJobs] = useState(null)

  const [reload, setReload] = useState(false)


function doubleReload() {
  setReload(prevReload => !prevReload)
  setTimeout(() => {
    setReload(prevReload => !prevReload)
  }, 2000);
}

  function updateStatus(interviewJob, status) {
    interviewJob.status = status
    updateJob(user, interviewJob)
    .then((response) => {
      console.log('JOB UPDATED', response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let configSaved = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8000/applied/saved',
          headers: { 
            'Authorization': `Token token=${user.token}`
          },
          data: data
        };
  
        let configApplied = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8000/applied/applied',
          headers: { 
            'Authorization': `Token token=${user.token}`
          },
          data: data
        };
  
        let configInterview = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8000/applied/interview',
          headers: { 
            'Authorization': `Token token=${user.token}`
          },
          data: data
        };
  
        let configRejected = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8000/applied/rejected',
          headers: { 
            'Authorization': `Token token=${user.token}`
          },
          data: data
        };
  
        const savedResponse = await axios.request(configSaved);
        setSavedJobs(savedResponse.data.jobs);
        console.log('Saved Jobs:', savedResponse.data);
  
        const appliedResponse = await axios.request(configApplied);
        setAppliedJobs(appliedResponse.data.jobs);
        console.log('Applied Jobs:', appliedResponse.data);
  
        const interviewResponse = await axios.request(configInterview);
        setInterviewJobs(interviewResponse.data.jobs);
        console.log('Interview Jobs:', interviewResponse.data);
  
        const rejectedResponse = await axios.request(configRejected);
        setRejectedJobs(rejectedResponse.data.jobs);
        console.log('Rejected Jobs:', rejectedResponse.data);
        
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [reload]);

  // ALL THE SAME HEAD MODEL WITH DIFFERENT STATUS, MAKE SURE TO REFER TOTHE RIGHT PLACE AT THE RIGHT TIME

  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >


        <Tab eventKey="saved" title="Saved">
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Saved</h2>
          <br />
          <Stack  style={{display: 'flex'}} gap={3}>
            {savedJobs ? (savedJobs.map((job) => (
              <div className="p-2 apJobs" style={{ borderBottom: '1px solid grey' }}>
                <img src={job.img} alt="" className="imgIcon" /> {job.company}  
                <div style={{ textAlign: 'right' }}>
                <Dropdown className="d-inline mx-2" >
                  <Dropdown.Toggle id="dropdown-autoclose-true" style={{backgroundColor: 'black', color: 'white', border: 'none'}} >
                    ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'applied'); doubleReload()}} >Move to Applied</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'interview'); doubleReload()}} >Move to Interview</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'rejected'); doubleReload()}} >Move to Rejection</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {removeJob(user, job._id); doubleReload()}} >Delete Application</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                {job.title}
                <br />
                <br />
                <p className='smallTextCard' >{job.details}</p>
              </div>))
            ) : (<p>Henlo</p>)}
          </Stack>
        </Tab>


        <Tab eventKey="applied" title="Applied" >
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Applied</h2>
          <br />
          <Stack  style={{display: 'flex'}} gap={3}>
            {appliedJobs ? (appliedJobs.map((job) => (
              <div className="p-2 apJobs" style={{ borderBottom: '1px solid grey' }}>
                <img src={job.img} alt="" className="imgIcon" /> {job.company}  
                <div style={{ textAlign: 'right' }}>
                <Dropdown className="d-inline mx-2" >
                  <Dropdown.Toggle id="dropdown-autoclose-true" style={{backgroundColor: 'black', color: 'white', border: 'none'}} >
                    ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'interview'); doubleReload()}} >Move to Interview</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'saved'); doubleReload()}} >Move to Saved</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'rejected'); doubleReload()}} >Move to Rejection</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {removeJob(user, job._id); doubleReload()}} >Delete Application</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                {job.title}
                <br />
                <br />
                <p className='smallTextCard' >{job.details}</p>
              </div>))
            ) : (<p>Henlo</p>)}
          </Stack>
        </Tab>


        <Tab eventKey="interview" title="Interviews">
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Interviews</h2>
          <br />
          <Stack  style={{display: 'flex'}} gap={3}>
            {interviewJobs ? (interviewJobs.map((job) => (
              <div className="p-2 apJobs" style={{ borderBottom: '1px solid grey' }}>
                <img src={job.img} alt="" className="imgIcon" /> {job.company}  
                <div style={{ textAlign: 'right' }}>
                <Dropdown className="d-inline mx-2" >
                  <Dropdown.Toggle id="dropdown-autoclose-true" style={{backgroundColor: 'black', color: 'white', border: 'none'}} >
                    ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'applied'); doubleReload()}} >Move to Applied</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'saved'); doubleReload()}} >Move to Saved</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'rejected'); doubleReload()}} >Move to Rejection</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {removeJob(user, job._id); doubleReload()}} >Delete Application</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                {job.title}
                <br />
                <br />
                <p className='smallTextCard' >{job.details}</p>
              </div>))
            ) : (<p>Henlo</p>)}
          </Stack>
        </Tab>


        <Tab eventKey="rejected" title="Rejected">
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Rejections</h2>
          <br />
          <Stack  style={{display: 'flex'}} gap={3}>
            {rejectedJobs ? (rejectedJobs.map((job) => (
              <div className="p-2 apJobs" style={{ borderBottom: '1px solid grey' }}>
                <img src={job.img} alt="" className="imgIcon" /> {job.company}  
                <div style={{ textAlign: 'right' }}>
                <Dropdown className="d-inline mx-2" >
                  <Dropdown.Toggle id="dropdown-autoclose-true" style={{backgroundColor: 'black', color: 'white', border: 'none'}} >
                    ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'applied'); doubleReload()}} >Move to Applied</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'interview'); doubleReload()}} >Move to Interview</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'saved'); doubleReload()}} >Move to Saved</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {removeJob(user, job._id); doubleReload()}} >Delete Application</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                {job.title}
                <br />
                <br />
                <p className='smallTextCard' >{job.details}</p>
              </div>))
            ) : (<p>Henlo</p>)}
          </Stack>
        </Tab>
      </Tabs>
    </Container>
  )
}