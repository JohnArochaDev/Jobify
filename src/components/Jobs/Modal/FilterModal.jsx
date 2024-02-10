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
        <Form>
          <fieldset>
            <Form.Group as={Col} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Job Type
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Full-Time"
                  name="fulltime"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Part-Time"
                  name="parttime"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Contract"
                  name="contractor"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="Intern"
                  name="intern"
                  id="formHorizontalRadios4"
                />
                <Form.Check
                  type="radio"
                  label="Select All"
                  name="fulltime;parttime;intern;contractor"
                  id="formHorizontalRadios5"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}