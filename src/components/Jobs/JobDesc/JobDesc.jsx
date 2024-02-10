import './JobDesc.css';
import Card from 'react-bootstrap/Card';

export default function JobDesc({ job }) {
  return (
    <>
      <div className='scrollBox' >
        {job ? (<Card className='card'>
          <Card.Body >
            <Card.Title> <img src={job.image} alt="" /> {job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{job.location} - {job.employmentType} - {job.datePosted}</Card.Subtitle>
            <Card.Text>
              <p style={{whiteSpace: 'pre-wrap'}} > {job.description} </p>
              
              
            </Card.Text>
          </Card.Body>
        </Card>) : (<h3>Loading...</h3>)}
      </div>
    </>
  )
}