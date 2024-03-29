import Card from 'react-bootstrap/Card';
import { createJob, removeJob, getOneJob } from '../../../api/jobs';
import { useState } from 'react';

export default function JobComponent({setSelectedJob, job, i, user}) {

  const [dBId, setDBId] = useState('')

  function saveOrNot(e) {
    if (saved) {
      // the below ID is not the .-id and thats why its not working
      removeSaved(user, dBId)
    } else if (!saved) {
      handleSave(e)
    }
    setSaved(!saved)
  }

  function removeSaved(user, id) {
    // console.log('this is the id', id)
    removeJob(user, id)
    .then((response) => {
      // console.log('JOB REMOVED', response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  async function handleSave(e) {
    e.preventDefault()
    e.stopPropagation()
    // console.log('Form submitted!');
    // console.log('This is the user: ', user)
    // console.log('This is the job at onClick: ', job)

    let userJob = {
        img: job.image,
        title: job.title,
        company: job.company,
        status: 'saved',
        details: `${job.location} - ${job.employmentType} - ${job.datePosted}`,
    }
    // console.log('This is the user job: ', userJob)

    await createJob(user, userJob)
        .then( res => {
          // console.log('Form was saved',res)
          setDBId(res.data.job._id)
      })
        .catch(err => {
            console.error(err)
        })
  }

  const [saved, setSaved] = useState(false)

  return (
    <>
        <Card 
        key={i}
        style={{height:  '15vh' }} 
        className='jobCard'
        onClick={(e) => {
          e.preventDefault()
          setSelectedJob(job)
          console.log('This is the job: ', job)
        }}
        >
          <Card.Body style={{display: 'flex', flexDirection: 'column' }} >
          <Card.Title onClick={(e) => e.preventDefault()} className="d-flex justify-content-between align-items-center" style={{fontSize: '1vw'}} >
            {job.title} {user ? (<img style={{width: '1vw', height: '1vw'}} onClick={saveOrNot} key={i} className='bookmarkImg' src={saved ? 'photos/bookmark.png' : 'photos/bookmark-white.png'} alt="" />) : (<></>)}
            
          </Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{fontSize: '1vw'}} >{job.company}</Card.Subtitle>
            <Card.Text style={{marginTop: 'auto', fontSize: '1vw'}} >
              <p className='smallTextCard' style={{fontSize: '.7vw'}} >{job.location} - {job.employmentType} - {job.datePosted}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
  )
}