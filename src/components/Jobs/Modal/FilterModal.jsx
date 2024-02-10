import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Filters
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ display: "flex", justifyContent: 'space-evenly' }} >
          <fieldset>
            <Form.Group as={Col} className="mb-3" style={{width: '20vh'}} >
              <Form.Label as="legend" column sm={5}>
                Job Type
              </Form.Label>
              <Col sm={10}>
                  <Form.Check type="checkbox" label="Full-Time" id='fulltime' key={'fulltime'} />
                  <Form.Check type="checkbox" label="Part-Time" id='parttime' key={'parttime'} />
                  <Form.Check type="checkbox" label="Contract" id='contract' key={'contract'} />
                  <Form.Check type="checkbox" label="Internship" id='intern' key={'intern'} />
                  <Form.Check type="checkbox" label="Select All" id='selectall' key={'selectall'} />
              </Col>
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group as={Col} className="mb-3">
              <Form.Label as="legend" column sm={5} style={{width: '20vh'}}>
                Distance
              </Form.Label>
              <Col sm={10}>
                  <Form.Check type="checkbox" label="5 mi" id='5' key={5} />
                  <Form.Check type="checkbox" label="10 mi" id='10' key={10} />
                  <Form.Check type="checkbox" label="20 mi" id='20' key={20} />
                  <Form.Check type="checkbox" label="50 mi" id='50' key={50} />
                  <Form.Check type="checkbox" label="100 mi" id='100' key={100} />
              </Col>
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group as={Col} className="mb-3" style={{width: '20vh'}}>
              <Form.Label as="legend" column sm={5}>
                Date Posted
              </Form.Label>
              <Col sm={10}>
                  <Form.Check type="checkbox" label="Today" id='today' key={'today'} />
                  <Form.Check type="checkbox" label="Last 3" id='last3' key={'last3'} />
                  <Form.Check type="checkbox" label="Weekly" id='weekly' key={'weekly'} />
                  <Form.Check type="checkbox" label="Monthly" id='monthly' key={'monthly'} />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group style={{ position: 'absolute', top: '110%' }} >
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: 'space-evenly'}} >
        <br/>
        <br/>
      </Modal.Footer>
    </Modal>
  );
}