import { useState, useEffect } from "react"
import JobDesc from "./JobDesc/JobDesc"
import JobList from "./JobList/JobList"
import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import MyVerticallyCenteredModal from './Modal/FilterModal'
import './Jobs.css'
import FilterModal from "./Modal/FilterModal";

require('dotenv').config()


const axios = require('axios');

export default function Jobs({user, query, setQuery, location, setLocation, distance, setDistance, language, setLanguage, remoteOnly, setRemoteOnly, datePosted, setDatePosted, employmentTypes, setEmploymentTypes, index, setIndex }) {

  const [modalShow, setModalShow] = useState(false);

  // setstate for the jobs and the selected job
  const [reload, setReload] = useState(true)
  const [jobs, setJobs] = useState()
  const [selectedJob, setSelectedJob] = useState(null)

  const [userLocation, setUserLocation] = useState('')
  const [userJob, setUserJob] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setQuery(userJob)
    setLocation(userLocation)
  }

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
        employmentTypes: employmentTypes,
        index: index
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      }
    };

    async function apiCall() {
      try {
      const response = await axios.request(options);// this is the API call
        setJobs(response.data.jobs) 
        setSelectedJob(response.data.jobs[0])
      } catch (error) {
      // console.error(error);
      }
    }
    apiCall();
    setReload(!reload)

  },[query, location, remoteOnly, employmentTypes, distance, datePosted, index])

  return (
 <>
      <Container className="bgColor" fluid>
        <Row className='emptyBar'>
          <div className="filterButton" style={{ display: "flex", justifyContent: 'space-around' }}>
            <Col xs={12} md={6} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{fontSize: '1.5vw'}} >Searching for <span style={{ color: '#11A7BB', fontSize: '1.5vw' }}>{query}</span> Jobs</h3>
            </Col>
            <Col xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Form>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Form.Control xs={12} md={4} style={{ marginRight: '1vh', marginBottom: '1rem', width: '30vh' }} type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} />
                    <Form.Control xs={12} md={4} style={{ marginRight: '1vh', marginBottom: '1rem', width: '30vh' }} type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} />
                    <Button type="submit" style={{ marginRight: '1vh', marginBottom: '1rem', backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black' }} onClick={handleSubmit}>Submit</Button>
                  </div>
                </Form>

                <Button onClick={() => setModalShow(true)} style={{ backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black', marginBottom: '1rem' }}>
                  Filter
                </Button>
              </div>
            </Col>
            <FilterModal
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
          <Row>
            <Col xs={12} md={4}>
              <JobList
                index={index}
                setIndex={setIndex}
                setSelectedJob={setSelectedJob}
                jobs={jobs}
                reload={reload}
                setReload={setReload}
                user={user}
              />
            </Col>
            <Col xs={12} md={8}>
              <JobDesc
                user={user}
                uJob={selectedJob}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}