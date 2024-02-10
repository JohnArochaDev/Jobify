import Card from 'react-bootstrap/Card';
import './JobList.css';

export default function JobList({ jobs, reload, setReload, setSelectedJob }) {


  return(
    <>
      <h2>Job List</h2>
        <div className='scrollBox' >
          {jobs ? (jobs.map((job) =>(
          <Card 
          style={{height:  '15vh' }} 
          className='card'
          onClick={() => {
            setSelectedJob(job)
            console.log('This is the job: ', job)
          }}
          >
            <Card.Body >
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
              <Card.Text>
                <p className='smallText' >{job.location} - {job.employmentType} - {job.datePosted}</p>
              </Card.Text>
            </Card.Body>
          </Card>))) : (<h3>Loading...</h3>)}
        </div>
    </>
  )
}