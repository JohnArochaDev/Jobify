import Card from 'react-bootstrap/Card';
import { createJob } from '../../../api/jobs';
import { useState } from 'react';

export default function JobComponent({setSelectedJob, job, i, user}) {

  async function handleSave(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log('Form submitted!');
    console.log('This is the user: ', user)
    console.log('This is the job at onClick: ', job)
    setSaved(!saved)

    let userJob = {
        img: job.image,
        title: job.title,
        company: job.company,
        status: 'saved',
        details: `${job.location} - ${job.employmentType} - ${job.datePosted}`,
    }
    console.log('This is the user job: ', userJob)

    await createJob(user, userJob)
        .then( res => {
          console.log('Form was saved',res)
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
          <Card.Title onClick={(e) => e.preventDefault()} className="d-flex justify-content-between align-items-center">
            {job.title}
            <img onClick={handleSave} key={i} className='bookmarkImg' src={saved ? 'photos/bookmark.png' : 'photos/bookmark-white.png'} alt="" />
          </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
            <Card.Text style={{marginTop: 'auto'}} >
              <p className='smallTextCard'>{job.location} - {job.employmentType} - {job.datePosted}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
  )
}

{/* <Card style={{display: 'flex', flexDirection: 'column' }} key={iii}>
<Card.Img className='loadingImg' src="/photos/SFLS.jpg" alt="Card image" />
<Card.ImgOverlay>
  <Card.Title></Card.Title>
  <Card.Text>
  </Card.Text>
  <Card.Text></Card.Text>
</Card.ImgOverlay>
</Card> */}