import { message } from "antd";
import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://teal-zebra-coat.cyclic.app/"

})

axios.interceptors.response.use(
    (res) => res,
    (err) => {
        const errorMessage = err.ree || err.message
        Promise.reject(errorMessage)
        message.error(errorMessage)
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