import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';

export default function MyVerticallyCenteredModal(props) {

  // deastructure the props, specifically the state and the setstate for the API call variables
  const { query, setQuery, location, setLocation, distance, setDistance, language, setLanguage, remoteOnly, setRemoteOnly, datePosted, setDatePosted, employmentTypes, setEmploymentTypes, index, setIndex } = props;
  // need to add function for the filters to be transferred into the necessary strings for the API calls
  
  function selectAll(e) {
    if (e.target.id === 'selectall') {
      document.getElementById('fulltime').checked = true;
      document.getElementById('parttime').checked = true;
      document.getElementById('contract').checked = true;
      document.getElementById('intern').checked = true;
    }
  }

  function compileJobTypes(e) {
    e.preventDefault();
    let jobTypes = '';
    let distance = '';
    let datePosted = '';

    if (document.getElementById('fulltime').checked) {
      jobTypes += 'fulltime;'
    }
    if (document.getElementById('parttime').checked) {
      jobTypes += 'parttime;'
    }
    if (document.getElementById('contract').checked) {
      jobTypes += 'contract;'
    }
    if (document.getElementById('intern').checked) {
      jobTypes += 'intern;'
    }
    if (document.getElementById('5').checked) {
       distance = '5.0' 
    }
    if (document.getElementById('10').checked) {
       distance = '10.0' 
    }
    if (document.getElementById('20').checked) {
       distance = '20.0' 
    }
    if (document.getElementById('50').checked) {
       distance = '50.0' 
    }
    if (document.getElementById('100').checked) {
       distance = '100.0' 
    }
    if (document.getElementById('today').checked) {
       datePosted = 'today' 
    }
    if (document.getElementById('last3').checked) {
       datePosted = '3days' 
    }
    if (document.getElementById('weekly').checked) {
       datePosted = 'week' 
    }
    if (document.getElementById('monthly').checked) {
       datePosted = 'month' 
    }
    console.log('jobTypes', jobTypes)
    console.log('distance', distance)
    console.log('datePosted', datePosted)
    setEmploymentTypes(jobTypes)
    setDistance(distance)
    setDatePosted(datePosted)
    return jobTypes;
  }

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
              <Form.Label as="legend" column sm={7}>
                Job Type
              </Form.Label>
              <Col sm={10}>
                  <Form.Check type="checkbox" label="Full-Time" id='fulltime' key={'fulltime'} />
                  <Form.Check type="checkbox" label="Part-Time" id='parttime' key={'parttime'} />
                  <Form.Check type="checkbox" label="Contract" id='contract' key={'contract'} />
                  <Form.Check type="checkbox" label="Internship" id='intern' key={'intern'} />
                  <Form.Check type="checkbox" label="Select All" id='selectall' key={'selectall'} onClick={selectAll} />
              </Col>
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group as={Col} className="mb-3">
              <Form.Label as="legend" column sm={7} style={{width: '20vh'}}>
                Distance
              </Form.Label>
              <Col sm={10}>
                  <Form.Check type="radio" name='distance' label="5 mi" id='5' key={5} />
                  <Form.Check type="radio" name='distance' label="10 mi" id='10' key={10} />
                  <Form.Check type="radio" name='distance' label="20 mi" id='20' key={20} />
                  <Form.Check type="radio" name='distance' label="50 mi" id='50' key={50} />
                  <Form.Check type="radio" name='distance' label="100 mi" id='100' key={100} />
              </Col>
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group as={Col} className="mb-3" style={{width: '20vh'}}>
              <Form.Label as="legend" column sm={7}>
                Date Posted
              </Form.Label>
              <Col sm={10}>
                  <Form.Check type="radio" name='time' label="Today" id='today' key={'today'} />
                  <Form.Check type="radio" name='time' label="Last 3" id='last3' key={'last3'} />
                  <Form.Check type="radio" name='time' label="Weekly" id='weekly' key={'weekly'} />
                  <Form.Check type="radio" name='time' label="Monthly" id='monthly' key={'monthly'} />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group style={{ position: 'absolute', top: '110%' }} >
            <Col>
              <Button type="submit" onClick={compileJobTypes} >Submit</Button>
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