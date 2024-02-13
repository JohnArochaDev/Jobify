import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    let credentials
    let username


	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser, user } = props

        if (email.includes('@')) {
            credentials = {email, password}
        } else {
            username = email
            credentials = {username, password}
        }

		signIn(credentials)
            .then((res) => {
                setUser(res.data.user)
                const userJSON = JSON.stringify(res.data.user)
                localStorage.setItem('user', userJSON)
            })
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	    }

        function onSignUp(event) {
            event.preventDefault()
            navigate('/sign-up')
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
            <div className='row'>
                <div className='col-sm-10 col-md-8' style={roundedContainerStyle}>
                <h3>Sign In</h3>
                <Form onSubmit={onSignIn}>
                    <Form.Group controlId='email'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type='username'
                        name='email'
                        value={email}
                        placeholder='Enter email or username'
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2vh' }}>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                    <Button variant='primary' type='submit' onClick={onSignUp} >
                        Sign Up
                    </Button>
                    </div>
                </Form>
                </div>
            </div>
        </div>
    );
}