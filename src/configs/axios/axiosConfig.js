import axios from 'axios'
import md5 from 'md5'
const BASE_URL = import.meta.env.VITE_BASE_URL
const API_PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY
const API_PRIVATE_KEY = import.meta.env.VITE_API_PRIVATE_KEY
const generateHash = () => {
    const timestamp = new Date().getTime()
    const hash = md5(`${timestamp}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`)
    return hash 
}

export const axiosConfig = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: '*/*'
    },
    params: {
        apikey: import.meta.env.VITE_API_PUBLIC_KEY,
        ts: new Date().getTime(),
        hash: generateHash()
    }
})