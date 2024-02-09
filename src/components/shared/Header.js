import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

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

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={{color:'black', textDecoration: 'none', }}>
				Jobify
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	// <Navbar bg='primary' variant='dark' expand='md'>
	// 	<Navbar.Brand>
  //           <Link to='/' style={linkStyle}>
  //               Jobify
  //           </Link>
  //       </Navbar.Brand>
	// 	<Navbar.Toggle aria-controls='basic-navbar-nav' />
	// 	<Navbar.Collapse id='basic-navbar-nav'>
	// 		<Nav className='ml-auto'>
	// 			{user && (
	// 				<span className='navbar-text mr-2'>Welcome, {user.email}</span>
	// 			)}
	// 			{alwaysOptions}
	// 			{user ? authenticatedOptions : unauthenticatedOptions}
	// 		</Nav>
	// 	</Navbar.Collapse>
	// </Navbar>
	<>
		<Navbar expand={false} bg='primary' variant='dark'>
			<Container fluid>
				<Navbar.Brand>
					{alwaysOptions}
				</Navbar.Brand>
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
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
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
			</Container>
		</Navbar>
</>
)

export default Header
