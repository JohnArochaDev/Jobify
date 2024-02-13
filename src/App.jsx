// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'


// import components
import Jobs from './components/Jobs/Jobs'
import Applied from './components/Applied/Applied'


const App = () => {

	//setstate for api call
	const [query, setQuery] = useState('Software Engineer')
  const [location, setLocation] = useState('United States')
  const [distance, setDistance] = useState('1.0')
  const [language, setLanguage] = useState('en_GB')
  const [remoteOnly, setRemoteOnly] = useState('false')
  const [datePosted, setDatePosted] = useState('month')
  const [employmentTypes, setEmploymentTypes] = useState('fulltime;parttime;intern;contractor') //fulltime;parttime;intern;contractor
  const [index, setIndex] = useState('0')

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
	
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment>
				<Header user={user} />
				<Routes>
					<Route path='/' element={<Home 
					msgAlert={msgAlert} 
					user={user} 
					query={query}
					setQuery={setQuery}
					location={location}
					setLocation={setLocation}
					/>} />
					<Route
						path='/sign-up'
						element={<SignUp msgAlert={msgAlert} setUser={setUser} user={user} />}
					/>
					<Route
						path='/jobs' element={ <Jobs 
							msgAlert={msgAlert} 
							query={query}
							setQuery={setQuery}	
							location={location}
							setLocation={setLocation}
							distance={distance}
							setDistance={setDistance}
							language={language}
							setLanguage={setLanguage}
							remoteOnly={remoteOnly}
							setRemoteOnly={setRemoteOnly}
							datePosted={datePosted}
							setDatePosted={setDatePosted}
							employmentTypes={employmentTypes}
							setEmploymentTypes={setEmploymentTypes}
							index={index}
							setIndex={setIndex}
							user={user}
							 />}
					/>
					<Route
						path='/applied' element={<Applied 
							msgAlert={msgAlert} 
							user={user} 
							/>}
					/>
					<Route
						path='/sign-in' element={<SignIn 
							msgAlert={msgAlert} 
							setUser={setUser} 
							/>}
					/>
          <Route
            path='/sign-out'
            element={
              <RequireAuth user={user}>
                <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
              </RequireAuth>
            }
          />
          <Route
            path='/change-password'
            element={
              <RequireAuth user={user}>
                <ChangePassword msgAlert={msgAlert} user={user} />
              </RequireAuth>}
          />
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App