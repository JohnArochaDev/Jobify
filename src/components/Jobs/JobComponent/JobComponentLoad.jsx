import { Card } from "react-bootstrap"

export default function JobComponentLoad({loadAmount}) {
  return (
    loadAmount.map((job, i) => (
    <Card className="jobCard" style={{display: 'flex', flexDirection: 'column'}} key={i}>
      <Card.Img className='loadingImg' src="/photos/SFLS.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>))
  )
}