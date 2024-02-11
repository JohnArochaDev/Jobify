import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllJobs = () => {
  return axios(`${apiUrl}/applied`)
}

export const getOneJob = (id) => {
  return axios(`${apiUrl}/applied/${id}`)
}

export const createJob = (user, newJob) => {
  return axios({
      url: `${apiUrl}/applied`,
      method: 'POST',
      headers: {
          Authorization: `Token token=${user.token}`
      },
      data: { pet: newJob }
  })
}

export const updateJob = (user, updatedJob) => {
  return axios({
      url: `${apiUrl}/applied/${updatedJob._id}`,
      method: 'PATCH',
      headers: {
          Authorization: `Token token=${user.token}`
      },
      data: { pet: updatedJob }
  })
}

export const removeJob = (user, id) => {
  return axios({
      url: `${apiUrl}/applied/${id}`,
      method: 'DELETE',
      headers: {
          Authorization: `Token token=${user.token}`
      }
  })
}