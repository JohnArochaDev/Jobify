import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function JobComponent({setSelectedJob, job, i}) {

  const [saved, setSaved] = useState(false)

  return (
    <>
      {/* {jobs ? (jobs.map((job,i) =>( */}
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
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>{job.title}</span>
            <span>
              <img onClick={() => setSaved(!saved)} key={i} className='bookmarkImg' src={saved ? 'photos/bookmark.png' : 'photos/bookmark-white.png'} alt="" />
            </span>
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