import JobDesc from "./JobDesc/JobDesc"
import JobList from "./JobList/JobList"
import { Container, Row, Col } from "react-bootstrap"

export default function Jobs() {
  return (
    <Container fluid>
      <Row>
        <Col><JobList /></Col>
        <Col xs={8}><JobDesc /></Col>
      </Row>
    </Container>
  )
}