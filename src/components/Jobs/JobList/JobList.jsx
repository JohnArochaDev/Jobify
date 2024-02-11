import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './JobList.css';


export default function JobList({ jobs, reload, setReload, setSelectedJob }) {


  return(
    <>
      <div className='scrollBox' >
        {jobs ? (jobs.map((job) =>(
        <Card 
        style={{height:  '15vh' }} 
        className='jobCard'
        onClick={() => {
          setSelectedJob(job)
          console.log('This is the job: ', job)
        }}
        >
          <Card.Body style={{display: 'flex', flexDirection: 'column' }} >
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
            <Card.Text style={{marginTop: 'auto'}} >
              <p className='smallTextCard'>{job.location} - {job.employmentType} - {job.datePosted}</p>
            </Card.Text>
          </Card.Body>
        </Card>))) : (<h3>Loading...</h3>)}
        {jobs ? (
        <ButtonToolbar style={{display: 'flex'}} aria-label="Toolbar with button groups">
          <ButtonGroup style={{marginLeft: '25%', color: 'black', backgroundColor: '#2AB67B'}} className="me-2" aria-label="First group">
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} >1</Button> 
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} >2</Button> 
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} >3</Button>
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} >4</Button>
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} >5</Button>
          </ButtonGroup>
        </ButtonToolbar>) : (<></>)}
      </div>
    </>
  )
}