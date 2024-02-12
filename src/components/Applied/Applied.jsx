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

  const [appliedJobs, setAppliedJobs] = useState(null)
  const [reload, setReload] = useState(true)

  let configAll = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/applied/applied',
    headers: { 
      'Authorization': `Token token=${user.token}`
    },
    data : data
  };

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

    axios.request(configAll)
    .then((response) => {
      setAppliedJobs(response.data.jobs)
      console.log('DB DATA', response.data)
    })
    .catch((error) => {
      console.log(error);
    });

  })

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
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }} >Saved Jobs</h2>
          <br />
        </Tab>


        <Tab eventKey="applied" title="Applied">
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Interviews</h2>
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
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'interview'); setReload(!reload)}} >Move to Interview</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'saved'); setReload(!reload)}} >Move to Saved</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {updateStatus(job, 'rejected'); setReload(!reload)}} >Move to Rejection</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {removeJob(user, job._id); setReload(!reload)}} >Delete Application</Dropdown.Item>
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


        <Tab eventKey="interview" title="Interview">
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }} >Saved Jobs</h2>
          <br />
        </Tab>


        <Tab eventKey="rejected" title="Rejected" >
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Rejections</h2>
        </Tab>
      </Tabs>


    </Container>
  )
}