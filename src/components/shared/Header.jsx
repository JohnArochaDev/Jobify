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
		<Nav.Item style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='jobs' style={{color: 'black', textDecoration: 'none'}} >
				Jobs
			</Link>
		</Nav.Item>
		<Nav.Item style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='applied' style={{color: 'black', textDecoration: 'none'}} >
				My Jobs
			</Link>
		</Nav.Item>
		<Nav.Item style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='change-password' style={{color: 'black', textDecoration: 'none'}} >
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='sign-out' style={{color: 'black', textDecoration: 'none'}} >
				Sign Out
			</Link>
		</Nav.Item>

	</>
)

const unauthenticatedOptions = (
	<>
	      <Nav.Item style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
		    	<Link to='jobs' style={{color: 'black', textDecoration: 'none' }} >Jobs</Link>
        </Nav.Item>
				<Nav.Item style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
		    	<Link to='sign-in' style={{color: 'black', textDecoration: 'none'}} >Sign In</Link>
        </Nav.Item>
        <Nav.Item style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
		    	<Link to='sign-up' style={{color: 'black', textDecoration: 'none'}} >Sign Up</Link>
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
							<h2>Settings</h2>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{user ? authenticatedOptions : unauthenticatedOptions}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
		</Navbar>
)

export default Header
