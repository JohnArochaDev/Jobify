import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import './Home.css'

export default function Home({ msgAlert, user, query, setQuery, location, setLocation } ) {
	const [userLocation, setUserLocation] = useState('')
	const [userJob, setUserJob] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		setLocation(userLocation)
		setQuery(userJob)
	}

	return (
		<Container className="bgColor" fluid>
			<Row className='emptyBar'>
					<Col style={{ display: 'flex', alignItems: 'center' }}>
							<Form>
									<InputGroup className="mb-3">
										<Form.Control type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} />
										<Form.Control type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} />
										<Button type="submit" style={{ marginRight: '1vh', backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black'}} onClick={handleSubmit} >Submit</Button>
									</InputGroup>
							</Form>
					</Col>
			</Row>
		</Container>
	)
}

