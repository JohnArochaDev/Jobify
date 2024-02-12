import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'

export default function Home({ msgAlert, user, query, setQuery, location, setLocation } ) {

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

	return (
    <Container className="bgColor" fluid >
      <Row className='emptyBar' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: '#F4FCFC' }}>
        <Col xs={12} md={6}>
          <Form>
            <InputGroup style={{paddingTop: '13vh'}}>
              <Form.Control type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} />
              <Form.Control type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} />
              <Button type="submit" style={{ backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black' }} onClick={handleSubmit}>Submit</Button>
            </InputGroup>
          </Form>
          <div  >
            <Row>
              <Col style={{display: 'flex'}}> 
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Pilot</Button>
                </Form>
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Software Engineer</Button>
                </Form>
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Construction</Button>
                </Form>
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Bank Teller</Button>
                </Form>
              </Col>
              <Col style={{display: 'flex'}}> 
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Salesman</Button>
                </Form>
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Maintenance</Button>
                </Form>
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Actor</Button>
                </Form>
                <Form style={{padding: '2vh 2vh 2vh',}} >
                  <Button style={{width: '20vh'}} >Delivery Driver</Button>
                </Form>
              </Col>
            </Row>
          </div>


        </Col>
      </Row>
    </Container>
	)
}