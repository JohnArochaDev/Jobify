import { useState, useEffect } from "react"
import { useRef } from 'react';
import JobDesc from "./JobDesc/JobDesc"
import JobList from "./JobList/JobList"
import { Container, Row, Col } from "react-bootstrap"
import './Jobs.css'

require('dotenv').config()


const axios = require('axios');

export default function Jobs() {

  const [reload, setReload] = useState(true)
  const [jobs, setJobs] = useState([])

  let currentJob


  useEffect(() => {

    const options = {//This is the API options to be sent to the API
      method: 'GET',
      url: 'https://jobs-api14.p.rapidapi.com/list',
      params: {
        query: 'Web Developer',
        location: 'United States',
        distance: '1.0',
        language: 'en_GB',
        remoteOnly: 'false',
        datePosted: 'month',
        emplyomentTypes: 'fulltime;parttime;intern;contractor',
        index: '0'
      },
      headers: {
        // 'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Key': 'API key in .env file',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      }
    };

    async function apiCall() {
      try {
      const response = await axios.request(options);// this is the API call
        console.log('This is the response: \n', response.data);// this is the API response
        setJobs(response.data.jobs) 
      } catch (error) {
      console.error(error);
      }
    }
    apiCall();
    setReload(!reload)

  },[])

  return (
    <>
      <Container fluid>
        <Row className='emptyBar'>

        </Row>
        <Container className="jobTitle">
          <Row >
            <Col><JobList 
            jobs={jobs} 
            reload={reload}
            setReload={setReload}
            /></Col>
            <Col xs={8}><JobDesc jobs={currentJob} /></Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}