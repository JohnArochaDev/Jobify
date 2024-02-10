import './JobDesc.css';
import Card from 'react-bootstrap/Card';

export default function JobDesc({ job }) {
  return (
    <>
      <h2>Job Description</h2>
      <div >
        {job ? (<Card style={{height:  '15vh' }} className='card'>
          <Card.Body >
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
            <Card.Text>
              <p className='smallText' >{job.location} - {job.employmentType} - {job.datePosted}</p>
            </Card.Text>
          </Card.Body>
        </Card>) : (<h3>Loading...</h3>)}
      </div>
    </>
  )
}