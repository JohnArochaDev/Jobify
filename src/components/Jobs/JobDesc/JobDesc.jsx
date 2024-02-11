import './JobDesc.css';
import Card from 'react-bootstrap/Card';
import uuid from 'react-uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from 'react';
import { useState } from 'react';


export default function JobDesc({ job }) {

  function setCheckMark(e) {
    console.log('e.target.id', e.target.id)
    document.getElementById(e.target.id).style.backgroundColor = 'green'
  }
  const [randomNumbers, setRandomNumbers] = useState(
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    [uuid(), Math.floor(Math.random() * 100)],
    )

  let value = 0

  console.log('randomNumbers', randomNumbers[value + 1])

  useEffect(() => {

    setRandomNumbers(
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
      [uuid(), Math.floor(Math.random() * 100)],
    )

    

  }, [])

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
                  return <ListGroup.Item action href={provider.url} target="_blank" id={uuid()} onClick={setCheckMark} >{provider.jobProvider}  </ListGroup.Item>
                })}
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