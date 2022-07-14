import axios from "axios"

const intance = 'http://localhost:3001'

export const login = async () => {
    const user = await axios.post(`${intance}/login`)
}

export const register = async (user : any) =>{
    const User =await axios.post(`${intance}/register`,user)
}