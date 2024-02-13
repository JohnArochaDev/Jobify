import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

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
    <>
        <div className='row' style={{marginTop: '7vh'}} >
            <div className='col-sm-10 col-md-8 mx-auto mt-5' style={roundedContainerStyle}>
                <h2 style={{marginTop: '-2vh', marginBottom: '5vh'}} >Are you sure you want to sign out?</h2>
                <div >
                    <small >We hate to see you go...</small>
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2vh', marginBottom: '-4vh'}} >
                    <Button variant='danger' onClick={onSignOut}>
                        Sign Out
                    </Button>
                    <Button variant='warning' onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    </>
	)
}


export default SignOut
