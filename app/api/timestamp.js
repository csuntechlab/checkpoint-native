import axios from './config';

const postUserClockInAPI = (payload, success, error) => {
    console.log(payload.timeStamp);
    const data = {
        timeStamp: payload.timeStamp,
      };
    axios.API.post(`api/clock/in`, data)
    .then(
        response => success(response),
        response => error(response),
    ); 
};

const postUserClockOutAPI = (payload, success, error) => {
    const data = {
        timeStamp: payload.timeStamp,
        logUuid: payload.logUuid
    };
    axios.API.post(`api/clock/out`, data)
    .then(
        response => success(response),
        response => error(response),
    ); 
};

export default {
    postUserClockInAPI,
    postUserClockOutAPI
}