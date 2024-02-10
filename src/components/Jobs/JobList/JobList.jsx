import Card from 'react-bootstrap/Card';
import './JobList.css';

export default function JobList({ jobs, reload, setReload }) {


  return(
    <>
      <h2>Job List</h2>

    {jobs ? (jobs.map((job) =>(<Card style={{height:  '15vh' }} className='card'>
          <Card.Body >
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
            <Card.Text>
              <p className='smallText' >{job.location} - {job.employmentType} - {job.datePosted}</p>
            </Card.Text>
          </Card.Body>
        </Card>))) : (<h3>Loading...</h3>)}
      </>
  )
}