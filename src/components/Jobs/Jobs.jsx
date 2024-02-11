import { useState, useEffect } from "react"
import JobDesc from "./JobDesc/JobDesc"
import JobList from "./JobList/JobList"
import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyVerticallyCenteredModal from './Modal/FilterModal'
import './Jobs.css'

require('dotenv').config()


const axios = require('axios');

export default function Jobs({ query, setQuery, location, setLocation, distance, setDistance, language, setLanguage, remoteOnly, setRemoteOnly, datePosted, setDatePosted, employmentTypes, setEmploymentTypes, index, setIndex }) {

  //setstate for api call
  // const [query, setQuery] = useState(['Software Engineer'])
  // const [location, setLocation] = useState('United States')
  // const [distance, setDistance] = useState('1.0')
  // const [language, setLanguage] = useState('en_GB')
  // const [remoteOnly, setRemoteOnly] = useState('false')
  // const [datePosted, setDatePosted] = useState('month')
  // const [employmentTypes, setEmploymentTypes] = useState('fulltime;parttime;intern;contractor') //fulltime;parttime;intern;contractor
  // const [index, setIndex] = useState('0')


  const [modalShow, setModalShow] = useState(false);

  // setstate for the jobs and the selected job
  const [reload, setReload] = useState(true)
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  const [userLocation, setUserLocation] = useState('')
  const [userJob, setUserJob] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setQuery(userJob)
    setLocation(userLocation)
  }

  // console.log('query', query)
  // console.log('location', location)
  // console.log('distance', distance)
  // console.log('language', language)
  // console.log('remoteOnly', remoteOnly)
  // console.log('datePosted', datePosted)
  // console.log('employmentTypes', employmentTypes)
  // console.log('index', index)

  // function handleChanges(e) {
  //   e.preventDefault()
    
  // }

  useEffect(() => {

    const options = {//This is the API options to be sent to the API
      method: 'GET',
      url: 'https://jobs-api14.p.rapidapi.com/list',
      params: {
        query: query,
        location: location,
        distance: distance,
        language: language,
        remoteOnly: remoteOnly,
        datePosted: datePosted,
        emplyomentTypes: employmentTypes,
        index: index
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
        // console.log('This is the response: \n', response.data);// this is the API response
        setJobs(response.data.jobs) 
      } catch (error) {
      console.error(error);
      }
    }
    apiCall();
    setReload(!reload)

  },[query, location, remoteOnly, employmentTypes, distance, datePosted])

  return (
    <>
      <Container className="bgColor" fluid>
      <Row className='emptyBar'>
        <div className="filterButton" style={{ display: "flex", justifyContent: 'space-around' }}>
          <Col style={{ display: 'flex', alignItems: 'center', marginLeft: '5vh' }} >
            <h3>Searching for {query} Jobs</h3>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Form>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Form.Control style={{ marginRight: '1vh', marginLeft: '17vh', width: '30vh' }} type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} />
                  <Form.Control style={{ marginRight: '1vh', width: '30vh' }} type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} />
                  <Button type="submit" style={{ marginRight: '1vh'}} onClick={handleSubmit} >Submit</Button>
                </div>
              </Form>

              <Button onClick={() => setModalShow(true)}>
                Filter
              </Button>
            </div>
          </Col>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            query={query}
						setQuery={setQuery}	
						location={location}
						setLocation={setLocation}
						distance={distance}
						setDistance={setDistance}
						language={language}
						setLanguage={setLanguage}
						remoteOnly={remoteOnly}
						setRemoteOnly={setRemoteOnly}
						datePosted={datePosted}
						setDatePosted={setDatePosted}
						employmentTypes={employmentTypes}
						setEmploymentTypes={setEmploymentTypes}
						index={index}
						setIndex={setIndex}
          />
        </div>
      </Row>
        <Container className="jobTitle">
          <Row >
            <Col><JobList 
            setSelectedJob={setSelectedJob}
            jobs={jobs} 
            reload={reload}
            setReload={setReload}
            /></Col>
            <Col xs={8}><JobDesc 
            job={selectedJob} 
            /></Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}