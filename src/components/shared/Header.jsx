import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'



export default function Header({ user }) {

	const [show, setShow] = useState(false);

const authenticatedOptions = (
	<>
		<Nav.Item onClick={()  => setShow(!show)}  style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='jobs' style={{color: 'black', textDecoration: 'none'}}  >
				Jobs
			</Link>
		</Nav.Item>
		<Nav.Item onClick={()  => setShow(!show)} style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='applied' style={{color: 'black', textDecoration: 'none'}} >
				My Jobs
			</Link>
		</Nav.Item>
		<Nav.Item onClick={()  => setShow(!show)} style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='change-password' style={{color: 'black', textDecoration: 'none'}} >
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item onClick={()  => setShow(!show)} style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='sign-out' style={{color: 'black', textDecoration: 'none'}} >
				Sign Out
			</Link>
		</Nav.Item>

	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item onClick={()  => setShow(!show)} style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='jobs' style={{color: 'black', textDecoration: 'none' }} >Jobs</Link>
		</Nav.Item>
		<Nav.Item onClick={()  => setShow(!show)} style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='sign-in' style={{color: 'black', textDecoration: 'none'}} >Sign In</Link>
		</Nav.Item>
		<Nav.Item onClick={()  => setShow(!show)} style={{marginBottom: '2vh', paddingBottom: '1vh', borderBottom: '1px solid grey'}}>
			<Link to='sign-up' style={{color: 'black', textDecoration: 'none'}} >Sign Up</Link>
		</Nav.Item>
	</>
)

return (

	<Navbar expand={false} className='navBarColor'>
		<Navbar.Brand href="/" className='d-flex align-items-center mx-auto' style={{ color: 'white', fontSize: '3vh', fontFamily: 'Paytone One' }}>Handshake</Navbar.Brand>
		<Navbar.Toggle onClick={()  => setShow(!show)} aria-controls='basic-navbar-nav' />
		<Navbar.Offcanvas
			backdrop={false}
			show={show}
			id='basic-navbar-nav'
			placement="end"
			enforceFocus={false}
		>
			<Offcanvas.Header closeButton onClick={()  => setShow(!show)}>
				<Offcanvas.Title>
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
}