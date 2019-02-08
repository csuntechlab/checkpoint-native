import axios from "axios"

const protocol = "http://"
const host = "localhost"
const port = ":8080/"
const url = protocol + host + port


const postUserLoginAPI = (payload, success, error) => {
    axios.get(`/api/login`).then(
        response => success(response.data),
        reponse => error(response)
    );
    // let path = "api/login"
    // console.log(url+path)
    // axios.get(url + path, {
    //     username: payload.username,
    //     password: payload.password,
    // }).then(
    //     response => success(response),    
    // ).catch(
    //     failure=>{ error(failure.response.data.message)}
    // );
};
const postUserRegisterationAPI = (payload, success, error) => {
    let path = "api/register"
    axios.get(url + path, {
        name: payload.username,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.confirmPassword,
    }).then(
        response => success(response.data),    
    ).catch(
        failure=>{ error(failure.response.data.message)}
    );
};
const postUserLogoutAPI = (payload, success, error) => {
    let path = "api/logout"
    
    window.axios.get(url + path, {
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