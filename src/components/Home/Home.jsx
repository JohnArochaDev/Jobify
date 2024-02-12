import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import './Home.css'

export default function Home({ msgAlert, user } ) {
	const [userLocation, setUserLocation] = useState('')
	const [userJob, setUserJob] = useState('')
	const [modalShow, setModalShow] = useState(false);

	function handleSubmit(e) {
		e.preventDefault()
		console.log('job', userJob)
		console.log('location', userLocation)
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

// 	return (
// 		<Container className="bgColor" fluid>
//       <Row className='emptyBar'>
//         <div className="filterButton" style={{ display: "flex", justifyContent: 'space-around' }}>
//           <Col style={{ display: 'flex', alignItems: 'center' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <Form>
//                 <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//                   <Form.Control style={{ marginRight: '1vh', marginLeft: '17vh', width: '30vh' }} type="text" placeholder="Search Jobs" id="jobSearch" onChange={e => setUserJob(e.target.value)} />
//                   <Form.Control style={{ marginRight: '1vh', width: '30vh' }} type="text" placeholder="Location" id="locationSearch" onChange={e => setUserLocation(e.target.value)} />
//                   <Button type="submit" style={{ marginRight: '1vh', backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black'}} onClick={handleSubmit} >Submit</Button>
//                 </div>
//               </Form>

//               <Button onClick={() => setModalShow(true)} style={{backgroundColor: '#2AABB6', border: '#2AABB6', color: 'black'}} >
//                 Filter
//               </Button>
//             </div>
//           </Col>
//         </div>
//       </Row>
// 		</Container>
// 	)
// }

