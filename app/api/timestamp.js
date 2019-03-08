import axios from 'axios';


const postUserClockInAPI = (payload, success, error) => {
    console.log("api " + payload.time);
    let data = {
        timeStamp: "2019-02-01 06:30:44",
        location: "check"
      };
      
    let header = {
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': "Bearer " + payload.auth_token
      };
    axios.post(`api/clock/in`, data, {headers : header})
    .then(
        response => success(console.log(response)),    
        response=> error(console.log(response))
    );
};

export default {
    postUserClockInAPI,
}