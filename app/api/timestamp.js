import axios from './config';

const postUserClockInAPI = (payload, success, error) => {
    console.log(payload.date);
    const data = {
        date: payload.date,
        time: payload.time
      };
    axios.API.post(`/api/clock/in`, data)
    .then(
        // response => success(response),
        response => console.log("fishyy " + JSON.stringify(response)),
        // response => error(response),
    ); 
};

const postUserClockOutAPI = (payload, success, error) => {
    const data = {
        date: payload.date,
        time: payload.time,
        logId: payload.logUuid
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