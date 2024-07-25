import axios from "axios"

const api = axios.create({
    // baseURL: "https://localhost:333"
    baseURL: "http://192.168.1.5:3333"
})

export default api