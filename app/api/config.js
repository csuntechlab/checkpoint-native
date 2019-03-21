import axios from 'axios';

const API  = axios.create({
    //axios configs
    baseURL: 'https://www.sandbox.csun.edu/metalab/dev/checkpoint/'

})

//to be used in route verifcation later...maybe?..boofpack?
API.CancelToken = axios.CancelToken;
API.isCancel = axios.isCancel;

//Axios token check
API.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('Auth_Token');

        if(token){
            config.headers['Authorization'] = `Bearer ${ token }`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(console.log(error));
    }
)

export default {
    API
}