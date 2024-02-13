import './JobDesc.css';
import Card from 'react-bootstrap/Card';
import uuid from 'react-uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createJob } from '../../../api/jobs';


export default function JobDesc({ uJob, user }) {
  
  // state for opening modal
  const [show, setShow] = useState(false);
  let value = 0

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
 
  async function onSubmit(e) {
    e.preventDefault()
    console.log('Form submitted!');

    let userJob = {
        img: uJob.image,
        title: uJob.title,
        company: uJob.company,
        status: 'applied',
        details: `${uJob.location} - ${uJob.employmentType} - ${uJob.datePosted}`,
    }

    await createJob(user, userJob)
        .then( res => {
          console.log('Form was saved',res)
        handleClose()
      })
        .catch(err => {
            console.error(err)
        })
  }

  return (
    <>
      <div className='scrollBox' >
        {uJob ? (
        <Card className='descCard'>
          <Card.Body key={uuid()} >
            <Card.Title key={uuid()}> <img src={uJob.image} alt="" /> {uJob.title}</Card.Title>
            <Card.Subtitle key={uuid()} className="mb-2 text-muted">{uJob.company}</Card.Subtitle>
            <Card.Subtitle key={uuid()} className="mb-2 text-muted">{uJob.location} - {uJob.employmentType} - {uJob.datePosted}</Card.Subtitle>
            <Card.Text key={uuid()} style={{whiteSpace: 'pre-wrap'}}>
              {uJob.description}
              <br />
              <ListGroup key={uuid()} className="d-flex mx-auto" style={{ width: '30vw' }}>
                <ListGroup.Item key={uuid()} action>
                    <h3 >Apply Now</h3>
                </ListGroup.Item >
                {uJob.jobProviders?.map((provider) => {
                  value++
                  return <ListGroup.Item action href={provider.url} target="_blank" id={randomNumbers[value]} key={uuid()} onClick={handleShow} >{provider.jobProvider}  </ListGroup.Item>
                })}
                <Modal key={uuid()} show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Did you Apply with {uJob.company}? </Modal.Title>
                  </Modal.Header>
                  <Modal.Footer className="d-flex justify-content-around">
                    {/* Make a form here that the button will input to the DB */}
                    <Button style={{width: '7vw', backgroundColor: 'green', borderColor: 'green'}} type="button" onClick={onSubmit}>
                      Yes
                    </Button>
                    <Button style={{width: '7vw', backgroundColor: 'red', borderColor: 'red'}} >
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