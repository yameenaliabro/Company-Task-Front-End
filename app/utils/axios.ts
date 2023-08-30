import Axios from "axios";
import { message } from "antd";

const axios = Axios.create({
    baseURL: "http://localhost:5000"
})

axios.interceptors.response.use(
    (res) => res,
    (err) => {
        const errorMessage = err.ree || err.message
        message.error(errorMessage)
        Promise.reject(errorMessage)
    }
)

export const setaxiostoken = (token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    console.log(token)
}
export const removeAxiosToken = () => {
    axios.defaults.headers.Authorization = null
}

export default axios