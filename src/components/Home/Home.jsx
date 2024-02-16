import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../shared/Footer';
import RequiredModal from '../Jobs/Modal/RequiredModal'

import './Home.css'

export default function Home({setQuery, setLocation, userJobo, setUserJobo, userLocationo, setUserLocationo } ) {

  const button = {
    width: '19vh',
    height: '5vh',
    backgroundColor: '#2AABB6',
    border: '#2AABB6',
    color: 'black',
    cursor: 'pointer',
    fontSize: '1.2em',
    overflow: 'hidden',
  };
  const [show, setShow] = useState(false);
	const [userLocation, setUserLocation] = useState(null)
	const [userJob, setUserJob] = useState(null)

	const navigate = useNavigate()

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

	function handleSubmit(e) {
		e.preventDefault()
    if (userLocation && userJob) {
		setLocation(userLocation)
		setQuery(userJob)
		navigate('/jobs')
    } else { 
      handleShow(true)
    }
	}

  function buttonSumbit(jobName) {
    let loc = 'United States'
    setQuery(jobName)
    setUserJobo(jobName)
    setLocation(loc)
    setUserLocationo(loc)
    navigate('/jobs')
  }

	return (
    <>
    <RequiredModal
    handleClose={handleClose}
    show={show}
     />
      <Container className="bgColor" fluid>
        <Row className='emptyBar' style={{ height: 'auto', minHeight: 'auto', display: 'flex', justifyContent: 'center' }}>
          <Col xs={12} md={6} className="text-center">
            <h2 style={{ fontSize: '4vh', color: '#2AABB6', fontFamily: 'Paytone One', paddingTop: '15vh' }}>Let's <span style={{ color: '#2AB635', textDecoration: 'underline' }}>introduce</span> you to your future</h2>
            <Form>
              <InputGroup style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
                <Form.Control style={{ height: '5vh', fontSize: '1vw' }} type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} required/>
                <Form.Control style={{ height: '5vh', fontSize: '1vw' }} type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} required/>
                <Button type="submit" style={{ backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black', height: '5vh', fontSize: '1vw' }} onClick={handleSubmit}>Submit</Button>
              </InputGroup>
              <Row className='d-flex flex-row justify-content-center'>
                <Col xs={6} md={3}>
                  <Form style={{ padding: '.7vh' }}>
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