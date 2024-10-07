import axios from 'axios'

export const baseURL = 'https://6xmlzdw3-1000.inc1.devtunnels.ms/'
// export const baseURL = 'https://192.168.191.179:1000/'

export const Axios = axios.create({
	baseURL,
})
