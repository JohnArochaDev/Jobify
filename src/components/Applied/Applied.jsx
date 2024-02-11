import { Container } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Applied() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="saved" title="Saved">
          Tab content for Home
        </Tab>
        <Tab eventKey="applied" title="Applied">
          Tab content for Profile
        </Tab>
        <Tab eventKey="interview" title="Interview">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="rejected" title="Rejected" >
          Tab content for Contact
        </Tab>
      </Tabs>
    </Container>
  )
}