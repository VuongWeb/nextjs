import axios from "axios";

const intance = axios.create({
    baseURL:'http://localhost:3001'
});

intance.interceptors.response.use(
    function(res){
        return res.data;
    },
    function(err){
        return Promise.reject(err)
    }
    )

export default intance;