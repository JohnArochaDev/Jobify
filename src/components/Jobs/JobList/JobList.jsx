
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import JobComponent from '../JobComponent/JobComponent';
import JobComponentLoad from '../JobComponent/JobComponentLoad';
import uuid from 'react-uuid';
import './JobList.css';


export default function JobList({ jobs, reload, setReload, setSelectedJob, index, setIndex, user}) {



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
        <JobComponent 
        job={job}
        i={i}
        setSelectedJob={setSelectedJob}
        user={user}
        />
      ))) : (
        <JobComponentLoad
          loadAmount={loadAmount}
          user={user}
        />
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