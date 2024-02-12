import { Container } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react"
import './Applied.css'
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';

const axios = require('axios');


export default function Applied({ user }) {

  let data = '';

  const [allJobs, setAllJobs] = useState(null)

  let configAll = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/applied',
    headers: { 
      'Authorization': `Token token=${user.token}`
    },
    data : data
  };

  useEffect(() => {
    axios.request(configAll)
    .then((response) => {
      setAllJobs(response.data.jobs)
      console.log('DB DATA', response.data)
    })
    .catch((error) => {
      console.log(error);
    });

  }, [])

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
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Applied</h2>
          <br />
          {allJobs ?( allJobs.map((job) => (
          <Card className="cardDB">
            <Card.Header> <img src={job.img} alt="" className="imgIcon" /> {job.company}</Card.Header>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>
                {job.description}
              </Card.Text>
            </Card.Body>
          </Card>))) : ( <p>Henlo</p>) }
        </Tab>


        <Tab eventKey="interview" title="Interview">
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Interviews</h2>
          <br />
          <Stack  style={{display: 'flex'}} gap={3}>
            {allJobs ? (allJobs.map((job) => (
              <div className="p-2 apJobs" style={{ borderBottom: '1px solid grey' }}>
                <img src={job.img} alt="" className="imgIcon" /> {job.company}  
                <div style={{ textAlign: 'right' }}>
                <Dropdown className="d-inline mx-2" >
                  <Dropdown.Toggle id="dropdown-autoclose-true" style={{backgroundColor: 'black', color: 'white', border: 'none'}} >
                    ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Move to Interview</Dropdown.Item>
                    <Dropdown.Item href="#">Delete Application</Dropdown.Item>
                    <Dropdown.Item href="#">Move to Rejection</Dropdown.Item>
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


        <Tab eventKey="rejected" title="Rejected" >
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Rejections</h2>
        </Tab>
      </Tabs>


    </Container>
  )
}