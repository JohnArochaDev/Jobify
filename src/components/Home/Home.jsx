import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../shared/Footer';

import './Home.css'

export default function Home({ msgAlert, user, query, setQuery, location, setLocation } ) {

  const button = {
    width: '20vh',
    height: '5vh',
    backgroundColor: '#2AABB6',
    border: '#2AABB6',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2em',
    overflow: 'hidden',
  };

	const [userLocation, setUserLocation] = useState('')
	const [userJob, setUserJob] = useState('')

	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()
		console.log('user location', userLocation)
		console.log('user job', userJob)
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
  <Container className="bgColor" fluid >
    <Row className='emptyBar' style={{ height: 'auto', minHeight: 'auto', display: 'flex', justifyContent: 'center' }}>
      <Col xs={12} md={6}>
        <h2 style={{ fontSize: '4vh', color: '#2AABB6', fontFamily: 'Paytone One', paddingTop: '15vh' }}>Let's <span style={{ color: '#2AB635' }}>introduce</span> you to your future</h2>
        <Form>
          <InputGroup style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
            <Form.Control style={{ height: '5vh' }} type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} />
            <Form.Control style={{ height: '5vh' }} type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} />
            <Button type="submit" style={{ backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black' }} onClick={handleSubmit}>Submit</Button>
          </InputGroup>
          <Row>
            <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 auto', justifyContent: 'center' }}>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Pilot')}>Pilot</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Software Engineer')}>Software Engineer</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Construction')}>Construction</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Bank Teller')}>Bank Teller</Button>
              </Form>
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '20px auto' }}>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Maintenance')}>Maintenance</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Actor')}>Actor</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Delivery Driver')}>Delivery Driver</Button>
              </Form>
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 auto',justifyContent: 'center' }}>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Salesman')}>Salesman</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Nurse')}>Nurse</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Chef')}>Chef</Button>
              </Form>
              <Form style={{ padding: '.5vh' }}>
                <Button className='homeHover' style={button} onClick={() => buttonSumbit('Mechanic')}>Mechanic</Button>
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