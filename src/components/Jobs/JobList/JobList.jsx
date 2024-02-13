import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './JobList.css';


export default function JobList({ jobs, reload, setReload, setSelectedJob, index, setIndex}) {

  let loadAmount = [
    [],
    [],
    [],
    [],
    [],
  ]


  return(
    <>
      <div className='scrollBox' >
        {jobs ? (jobs.map((job,i) =>(
        <Card 
        key={i}
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
        </Card>))) : (loadAmount.map((load, iii) =>(
        <Card style={{display: 'flex', flexDirection: 'column' }} key={iii}>
          <Card.Img className='loadingImg' src="/photos/SFLS.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
        </Card>
        ))
        )}
        <ButtonToolbar style={{display: 'flex'}} aria-label="Toolbar with button groups">
          <ButtonGroup style={{marginLeft: '25%', color: 'black', backgroundColor: '#2AB67B'}} className="me-2" aria-label="First group">
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} onClick={() => {setIndex('0'); console.log(index)}} >1</Button> 
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} onClick={() => {setIndex('1'); console.log(index)}} >2</Button> 
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} onClick={() => {setIndex('2'); console.log(index)}} >3</Button>
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} onClick={() => {setIndex('3'); console.log(index)}} >4</Button>
            <Button style={{ color: 'black', backgroundColor: '#2AB67B', border: 'green'}} onClick={() => {setIndex('4'); console.log(index)}} >5</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </>
  )
}