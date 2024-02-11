import './JobDesc.css';
import Card from 'react-bootstrap/Card';
import uuid from 'react-uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createJob } from '../../../api/jobs';
import { Form } from 'react-bootstrap';


export default function JobDesc({ uJob, user }) {

  console.log('user', user)

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


 
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!');
    let img = document.getElementById('img').value
    let title = document.getElementById('title').value
    let company = document.getElementById('company').value
    let status = document.getElementById('status').value

    let userJob = {
        img: img,
        title: title,
        company: company,
        status: status,
    }
    console.log('userJob', userJob)

    createJob(user, userJob)
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


                    <Form onSubmit={onSubmit}>
                      <Form.Group >
                      <Form.Control hidden
                          id="img"
                          name="img"
                          defaultValue={uJob.image}
                          key={uuid()}
                      />
                      </Form.Group>
                      <Form.Group >
                      <Form.Control hidden 
                          id="title"
                          name="title"
                          defaultValue={uJob.title}
                          key={uuid()}
                      />
                      </Form.Group>
                      <Form.Group >
                      <Form.Control hidden
                          id="company"
                          name="company"
                          defaultValue={uJob.company}
                          key={uuid()}
                      />
                      </Form.Group>
                      <Form.Group >
                      <Form.Control hidden
                          id="status"
                          name="status"
                          defaultValue={'applied'}
                          key={uuid()}
                      />
                      </Form.Group>
                      
                      <Button style={{width: '7vw', backgroundColor: 'green', borderColor: 'green'}} type="submit">Yes</Button>
                    </Form>

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



// return (
//   <>
//     <div className='scrollBox'>
//       {uJob ? (
//         <div>
//           <Button onClick={handleShow}>Open Modal</Button>

//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>Modal Title</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form onSubmit={onSubmit}>
//                 <Form.Group controlId="formImg">
//                   <Form.Label>Image</Form.Label>
//                   <Form.Control type="text" placeholder="Enter image URL" />
//                 </Form.Group>
//                 <Form.Group controlId="formTitle">
//                   <Form.Label>Title</Form.Label>
//                   <Form.Control type="text" placeholder="Enter title" />
//                 </Form.Group>
//                 <Form.Group controlId="formCompany">
//                   <Form.Label>Company</Form.Label>
//                   <Form.Control type="text" placeholder="Enter company" />
//                 </Form.Group>
//                 <Form.Group controlId="formStatus">
//                   <Form.Label>Status</Form.Label>
//                   <Form.Control type="text" placeholder="Enter status" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   </>
// );