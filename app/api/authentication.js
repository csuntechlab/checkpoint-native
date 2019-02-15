import axios from "axios"


const postUserLoginAPI = (payload, success, error) => {
    axios.post(`api/login`, {
        username: payload.username,
        password: payload.password
    }).then(
        response => success(response),    
    ).catch(
        failure=>{ error(failure.response)}
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
    ).catch(
        failure=>{ error(failure.response)}
    );
};
const postUserLogoutAPI = (payload, success, error) => {
    let path = "api/logout"
    
    axios.get(url + path, {
        username: payload.username,
        password: payload.password,
    }).then(
        response => success(response.data),    
    ).catch(
        failure=>{ error(failure.response.data.message)}
    );
};

// const fetchForgetPassword = (payload, success, error) => {
//     window.axios.get().then(
//         response => success(response.data),    
//     ).catch(
//         failure=>{ error(failure.response.data.message)}
//     );
// };

export default{
    postUserLoginAPI,
    postUserLogoutAPI,
    postUserRegisterationAPI
}