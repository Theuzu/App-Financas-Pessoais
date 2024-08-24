import axios from "axios"

const api = axios.create({
    // baseURL: "https://localhost:3333"
    // baseURL: "http://192.168.1.1:3333"
    // baseURL: "http://192.168.1.2:3333"
    baseURL: "http://192.168.1.4:3333"
    // baseURL: "http://192.168.1.5:3333"
})

export default api