import './JobDesc.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function JobDesc({ job }) {
  console.log('job', job)
  return (
    <>
            <div className='scrollBox' >
              {job ? (<Card className='descCard'>
                <Card.Body >
                  <Card.Title> <img src={job.image} alt="" /> {job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{job.location} - {job.employmentType} - {job.datePosted}</Card.Subtitle>
                  <Card.Text>
                    <p style={{whiteSpace: 'pre-wrap'}} > {job.description} </p>
                    <br />
                    <ListGroup className="d-flex mx-auto" style={{ width: '30vw' }}>
                      <ListGroup.Item action>
                          <h3 >Apply Now</h3>
                      </ListGroup.Item>
                      {job.jobProviders?.map((provider) => (
                        <ListGroup.Item action href={provider.url} target="_blank" >
                          {provider.jobProvider}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>) : (
              <Card style={{ width: '44vw', height: '70vh' }} >
              <Card.Img className='loadingImg' src="/photos/FLI.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title></Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Card.Text></Card.Text>
              </Card.ImgOverlay>
            </Card>
              )}
            </div>
    </>
  )
}