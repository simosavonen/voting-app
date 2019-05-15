import axios from 'axios'
const baseUrl = 'http://localhost:8080/district'

const getAll = () => {
  return axios.get(baseUrl)
}

export default { getAll }