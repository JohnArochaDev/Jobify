import './JobDesc.css';
import Card from 'react-bootstrap/Card';
import uuid from 'react-uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function JobDesc({ job }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  let value = 0

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
                    <Button onClick={handleClose} style={{width: '7vw', backgroundColor: 'green', borderColor: 'green'}} >
                      Yes
                    </Button>
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