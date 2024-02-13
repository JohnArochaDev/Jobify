// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {username, email, password, passwordConfirmation}
        console.log('credentials', credentials)
		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setUsername('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
      };
      
      const roundedContainerStyle = {
        marginTop: '20vh',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '10vh',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
        width: '100vh',
      };

    return (
        <div style={containerStyle}>
        <div className='row' style={{marginTop: '10vh'}} >
          <div className='col-sm-10 col-md-8 mx-auto mt-5' style={roundedContainerStyle}>
            <h3>Sign Up</h3>
            <Form onSubmit={onSignUp}>
              <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type='username'
                  name='username'
                  value={username}
                  placeholder='Enter username'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Enter email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name='password'
                  value={password}
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='passwordConfirmation'>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  type='password'
                  placeholder='Confirm Password'
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
                <Button variant='primary' type='submit'>
                  Sign Up
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default SignUp