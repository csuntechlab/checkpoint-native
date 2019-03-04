import axios from 'axios';
import state from '../Store/modules/timestamp/state';
import state from '../Store/modules/authentication/state';


const postUserClockIn = (payload, success, error) => {
    axios.post(`api/clock/in`, {
        headers: { Authorization: "Bearer " + state.user_token },
        timestamp: payload.timein,
        location: payload.location
    }).then(
        response => success(response),    
        response=> error(response)
    );
};