import { useState, useEffect } from "react"
import JobDesc from "./JobDesc/JobDesc"
import JobList from "./JobList/JobList"
import { Container, Row, Col } from "react-bootstrap"
import './Jobs.css'

require('dotenv').config()


const axios = require('axios');

export default function Jobs() {

  //setstate for api call
  const [query, setQuery] = useState(['Software Engineer'])
  const [location, setLocation] = useState(['United States'])
  const [distance, setDistance] = useState(['1.0'])
  const [language, setLanguage] = useState()
  const [remoteOnly, setRemoteOnly] = useState()
  const [datePosted, setDatePosted] = useState()
  const [employmentTypes, setEmploymentTypes] = useState() //fulltime;parttime;intern;contractor
  const [index, setIndex] = useState()

  // setstate for the jobs and the selected job
  const [reload, setReload] = useState(true)
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState([null])

  useEffect(() => {

    const options = {//This is the API options to be sent to the API
      method: 'GET',
      url: 'https://jobs-api14.p.rapidapi.com/list',
      params: {
        query: 'Software Engineer',
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
        'X-RapidAPI-Key': '8e77011efdmsh377cd21c79be48ep1c1c04jsn09a4be0b5faa',
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
      <Container className="bgColor" fluid>
        <Row className='emptyBar'>

        </Row>
        <Container className="jobTitle">
          <Row >
            <Col><JobList 
            setSelectedJob={setSelectedJob}
            jobs={jobs} 
            reload={reload}
            setReload={setReload}
            /></Col>
            <Col xs={8}><JobDesc job={selectedJob} /></Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}