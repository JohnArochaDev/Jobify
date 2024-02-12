import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './Header.css'

const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='change-password' >
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' >
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link to='sign-up' >Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' >Sign In</Link>
        </Nav.Item>
	</>
)

const Header = ({ user }) => (
		<Navbar expand={false} className='navBarColor'>
				<Navbar.Brand href="/" className='center-navbar' style={{color: "white", fontSize: '3vh', fontFamily: 'Paytone One'}} >Jobify</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Offcanvas
					id='basic-navbar-nav'
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title >
							Settings
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{user ? authenticatedOptions : unauthenticatedOptions}
							<NavDropdown
								title="Dropdown"
								
							>
								<NavDropdown.Item>
									<Link to='jobs' >Jobs</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="/applied">
									<Link to='applied' >Applied</Link>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
		</Navbar>
)

export default Header
