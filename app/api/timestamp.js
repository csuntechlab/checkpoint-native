import axios from './config';

const postUserClockInAPI = (payload, success, error) => {
    console.log(payload.date);
    axios.API.post(`/api/clock/in`, payload)
    .then(
        response => success(response),
        response => error(response),
    ); 
};

const postUserClockOutAPI = (payload, success, error) => {
    axios.API.post(`api/clock/out`, payload)
    .then(
        response => success(response),
        response => error(response),
    ); 
};

export default {
    postUserClockInAPI,
    postUserClockOutAPI
}