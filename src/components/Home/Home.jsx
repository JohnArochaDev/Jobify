import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../shared/Footer';

import './Home.css'

export default function Home({setQuery, setLocation } ) {

  const button = {
    width: '20vh',
    height: '5vh',
    backgroundColor: '#2AABB6',
    border: '#2AABB6',
    color: 'black',
    cursor: 'pointer',
    fontSize: '1.2em',
    overflow: 'hidden',
  };

	const [userLocation, setUserLocation] = useState('')
	const [userJob, setUserJob] = useState('')

	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()
		// console.log('user location', userLocation)
		// console.log('user job', userJob)
		setLocation(userLocation)
		setQuery(userJob)
		navigate('/jobs')
	}

  function buttonSumbit(jobName) {
    let loc = 'United States'
    setQuery(jobName)
    setLocation(loc)
    navigate('/jobs')
  }

	return (
<>
<Container className="bgColor" fluid>
  <Row className='emptyBar' style={{ height: 'auto', minHeight: 'auto', display: 'flex', justifyContent: 'center' }}>
    <Col xs={12} md={6} className="text-center">
      <h2 style={{ fontSize: '4vh', color: '#2AABB6', fontFamily: 'Paytone One', paddingTop: '15vh' }}>Let's <span style={{ color: '#2AB635', textDecoration: 'underline' }}>introduce</span> you to your future</h2>
      <Form>
        <InputGroup style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <Form.Control style={{ height: '5vh' }} type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} />
          <Form.Control style={{ height: '5vh' }} type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} />
          <Button type="submit" style={{ backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black', height: '5vh' }} onClick={handleSubmit}>Submit</Button>
        </InputGroup>
        <Row className='d-flex flex-row justify-content-center'>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Pilot')}>Pilot</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Software Engineer')}>Software Engineer</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Construction')}>Construction</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Bank Teller')}>Bank Teller</Button>
            </Form>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center'>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Maintenance')}>Maintenance</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Actor')}>Actor</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Delivery Driver')}>Delivery Driver</Button>
            </Form>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center'>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Salesman')}>Salesman</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Nurse')}>Nurse</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Chef')}>Chef</Button>
            </Form>
          </Col>
          <Col xs={6} md={3}>
            <Form style={{ padding: '.5vh' }}>
              <Button className='homeHover' style={{ ...button, fontSize: '1vw' }} onClick={() => buttonSumbit('Mechanic')}>Mechanic</Button>
            </Form>
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
</Container>

  <Footer />
</>


	)
}