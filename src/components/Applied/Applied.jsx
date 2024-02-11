import { Container } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react"

const axios = require('axios');


export default function Applied() {

  let data = '';

  const [allJobs, setAllJobs] = useState(null)

  let configAll = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/applied',
    headers: { 
      'Authorization': 'Bearer 0ee34d68e142f987d49969e14d4f39d4'
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
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Saved Jobs</h2>
          <br />
        </Tab>


        <Tab eventKey="applied" title="Applied">
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Applied</h2>
          <br />
          {allJobs ?( allJobs.map((job) => (
          <Card>
            <Card.Header>{job.title}</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                {job.description}
              </Card.Text>
            </Card.Body>
          </Card>))) : ( <p></p>) }
        </Tab>


        <Tab eventKey="interview" title="Interview">
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Interviews</h2>
        </Tab>


        <Tab eventKey="rejected" title="Rejected" >
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Rejections</h2>
        </Tab>
      </Tabs>


    </Container>
  )
}