import './JobDesc.css';
import Card from 'react-bootstrap/Card';
import uuid from 'react-uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createJob } from '../../../api/jobs';
import { Form } from 'react-router-dom';


export default function JobDesc({ job, user }) {

  // state for opening modal
  const [show, setShow] = useState(false);

  // state for form
  const [img, setImg] = useState('')
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState('')
  let value = 0

  const [userJob, setUserJob] = useState({
    img: '',
    title: '',
    company: '',
    status: '',
})

  const [randomNumbers, setRandomNumbers] = useState([
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
  ])



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e) => {
    e.preventDefault()

    createJob(user, userJob)
        .catch(err => {
            console.error(err)
        })
  }


  return (
    <>
      <div className='scrollBox' >
        {job ? (
        <Card className='descCard'>
          <Card.Body >
            <Card.Title> <img src={job.image} alt="" /> {job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{job.location} - {job.employmentType} - {job.datePosted}</Card.Subtitle>
            <Card.Text>
              <p style={{whiteSpace: 'pre-wrap'}} > {job.description} </p>
              <br />
              <ListGroup className="d-flex mx-auto" style={{ width: '30vw' }}>
                <ListGroup.Item action>
                    <h3 >Apply Now</h3>
                </ListGroup.Item>
                {job.jobProviders?.map((provider) => {
                  value++
                  return <ListGroup.Item action href={provider.url} target="_blank" id={randomNumbers[value]} key={uuid()} onClick={handleShow} >{provider.jobProvider}  </ListGroup.Item>
                })}

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Did you Apply with {job.company}? </Modal.Title>
                  </Modal.Header>
                  <Modal.Footer className="d-flex justify-content-around">
                    {/* Make a form here that the button will input to the DB */}


                    <Form onSubmit={onSubmit }>
                      <Form.Group hidden>
                      <Form.Control hidden
                          id="img"
                          name="img"
                          value={job.image}
                      />
                      </Form.Group>
                      <Form.Group hidden>
                      <Form.Control hidden
                          id="title"
                          name="title"
                          value={job.title}
                      />
                      </Form.Group>
                      <Form.Group hidden>
                      <Form.Control hidden
                          id="company"
                          name="company"
                          value={job.company}
                      />
                      </Form.Group>
                      <Form.Group hidden>
                      <Form.Control hidden
                          id="status"
                          name="status"
                          value={'applied'}
                      />
                      </Form.Group>
                      
                      <Button onClick={handleClose} style={{width: '7vw', backgroundColor: 'green', borderColor: 'green'}} type="submit">Yes</Button>
                    </Form>


                    {/* <Button onClick={handleClose} style={{width: '7vw', backgroundColor: 'green', borderColor: 'green'}} >
                      Yes
                    </Button> */}
                    <Button onClick={handleClose} style={{width: '7vw', backgroundColor: 'red', borderColor: 'red'}} >
                      No
                    </Button>

                  </Modal.Footer>
                </Modal>

              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>) : (
        <Card style={{ width: '44vw', height: '70vh' }} >
        <Card.Img className='loadingImg' src="/photos/FLI.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
        )}
      </div>
    </>
  )
}