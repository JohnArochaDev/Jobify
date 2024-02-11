import { Container } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect } from "react";

export default function Applied() {

  // useEffect(() => {

  // }, [])

  // ALL THE SAME HEAD MODEL WITH DIFFERENT STATUS, MAKE SURE TO REFER TOTHE RIGHT PLACE AT THE RIGHT TIME

  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="saved" title="Saved">
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Saved Jobs</h2>
        </Tab>
        <Tab eventKey="applied" title="Applied">
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Applied</h2>
        </Tab>
        <Tab eventKey="interview" title="Interview">
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Interviews</h2>
        </Tab>
        <Tab eventKey="rejected" title="Rejected" >
          <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Rejections</h2>
        </Tab>
      </Tabs>
    </Container>
  )
}