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
    <Col xs={12} md={6} className="text-center">
      <h2 style={{ fontSize: '4vh', color: '#2AABB6', fontFamily: 'Paytone One', paddingTop: '15vh' }}>Let's <span style={{ color: '#2AB635', textDecoration: 'underline' }}>introduce</span> you to your future</h2>
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
  {/*<Row>
      <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 auto', justifyContent: 'center', height: 'auto' }}>
        <h2 style={{ marginTop: '10vh' }} >About Us</h2>
      </Col>
      <Col>
        <p>Welcome to [Your Website Name], where we are dedicated to connecting individuals with their dream careers. Our mission is to simplify the job search process, making it efficient, enjoyable, and ultimately successful for you.

        Who We Are
        At [Your Website Name], we understand that finding the right job is more than just a transaction; it's about fulfilling your aspirations and enhancing your life. We are a passionate team committed to empowering job seekers by providing them with the tools and resources needed to navigate the competitive job market.

        Our Approach
        We believe in a personalized approach to job hunting. Our platform is designed to cater to your unique skills, preferences, and career goals. Whether you're a seasoned professional looking for a new challenge or a recent graduate eager to kickstart your career, we've got you covered.

        What Sets Us Apart
        User-Friendly Interface: Our intuitive and user-friendly interface ensures a seamless and stress-free job search experience. Easily navigate through job listings, filter options, and save your favorite opportunities with just a few clicks.

        Comprehensive Job Listings: We curate a diverse range of job listings across various industries and sectors. From entry-level positions to executive roles, we strive to offer a comprehensive array of opportunities to suit every career stage.

        Personalized Job Recommendations: Our advanced matching algorithms analyze your skills, qualifications, and preferences to provide you with personalized job recommendations. Spend less time searching and more time applying to positions that align with your goals.

        Career Resources: In addition to job listings, we provide valuable resources to enhance your job search journey. From resume tips to interview strategies, our blog and guides are crafted to empower you at every step.

        Join Us on the Journey
        Embark on your job search journey with [Your Website Name]. Let us be your trusted partner in achieving professional success. Together, we'll turn your career aspirations into reality.

        Discover your potential. Find your dream job. Welcome to [Your Website Name].
        </p>
      </Col>
    </Row> */}
  </Container>
  <Footer />
</>


	)
}