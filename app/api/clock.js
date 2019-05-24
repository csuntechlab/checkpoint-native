import axios from './config';

const postUserClockInAPI = (payload, success, error) => {
    axios.API.post(`/api/clock/in`, payload)
    .then(
        response => success(response),
        response => error(response),
    ); 
};

const postUserClockOutAPI = (payload, success, error) => {
    var clock_out_url = "api/clock/out/" + payload.logId; 
    axios.API.post(clock_out_url, payload).then(
      response => success(response),
      response => error(response)
    ); 
};

export default {
    postUserClockInAPI,
    postUserClockOutAPI
}   

