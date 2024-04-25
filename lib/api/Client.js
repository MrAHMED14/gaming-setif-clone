import axios from "axios"

const apiKey = process.env.NEXT_PUBLIC_REST_API
const apiUrl = process.env.NEXT_PUBLIC_URL


const Client = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
})
export default Client