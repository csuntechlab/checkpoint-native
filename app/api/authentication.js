import axios from "axios";


const postUserLoginAPI = (payload, success, error) => {
    axios.post(`api/login`, {
        username: payload.username,
        password: payload.password
    }).then(
        response => success(response),    
        response=> error(response)
    );
};
const postUserRegisterationAPI = (payload, success, error) => {
    axios.post(`api/register`, {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation
    }).then(
        response => success(response),
        response => error(response), 
    );
};
const postUserLogoutAPI = (payload, success, error) => {    
    axios.post(`api/logout`, null, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'authorization': payload
        },
    }).then(
        response => success(response),
        response => error(response),    
    );
};

export default{
    postUserLoginAPI,
    postUserLogoutAPI,
    postUserRegisterationAPI
}