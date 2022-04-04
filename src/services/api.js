import axios from 'axios'

export const key = "60380b74f87a53eafe94ae69b3f744e645127ff6";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;