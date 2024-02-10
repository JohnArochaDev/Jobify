import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/sign-up',
		data: {
			credentials: {
				username: credentials.username,
				email: credentials.email,
				password: credentials.password,
				password_confirmation: credentials.passwordConfirmation,
			},
		},
	})
}

export const signIn = (credentials) => {
	if (credentials.username) {
		return axios({
			url: apiUrl + '/sign-in',
			method: 'POST',
			data: {
				credentials: {
					username: credentials.username,
					email: '',
					password: credentials.password,
				},
			},
		})
	} else {
		return axios({
			url: apiUrl + '/sign-in',
			method: 'POST',
			data: {
				credentials: {
					email: credentials.email,
					username: '',
					password: credentials.password,
				},
			},
		})
	}
}

export const signOut = (user) => {
	return axios({
		url: apiUrl + '/sign-out',
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const changePassword = (passwords, user) => {
	return axios({
		url: apiUrl + '/change-password',
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			passwords: {
				old: passwords.oldPassword,
				new: passwords.newPassword,
			},
		},
	})
}
