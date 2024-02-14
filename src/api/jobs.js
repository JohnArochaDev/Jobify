import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllJobs = () => {
  return axios(`${apiUrl}/applied`)
}

export function getApplied() {
  return axios(`${apiUrl}/applied/applied`)
}


export const getOneJob = (id) => {
  return axios(`${apiUrl}/applied/${id}`)
}

export const createJob = (user, newJob) => {
  return axios({
      url: `${apiUrl}/applied`,
      // url: 'http://localhost:8000/applied',
      method: 'POST',
      headers: {
          Authorization: `Token token=${user.token}`
      },
      data: { job: newJob }
  })
}

export const updateJob = (user, updatedJob) => {
  return axios({
      url: `${apiUrl}/applied/${updatedJob._id}`,
      method: 'PATCH',
      headers: {
          Authorization: `Token token=${user.token}`
      },
      data: { job: updatedJob }
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