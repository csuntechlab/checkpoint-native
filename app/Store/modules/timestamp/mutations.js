//AUTH MUTATIONS
import _timestamp from '../../mutation-types/timestamp';

export default {
    [_timestamp.CLOCK_IN] (state, payload) {
        state.user_log.status = true;
        state.user_log.time_in.push(payload.time);
    },
    [_timestamp.CLOCK_OUT] (state, payload) {
        localStorage.removeItem('Log_uuid');
        state.user_log.status = false;
        state.user_log.time_out.push(payload.time);
    },
    [_timestamp.UPDATE_USER_STATUS] (state, payload) {
        console.log("update log id " + payload);
        if(localStorage.getItem('Log_uuid')){
            state.user_log.status = true;
            state.user_log.log_id = localStorage.getItem('Log_uuid');
        } else {
            state.user_log.status = false;
        }
    },
    [_timestamp.STORE_LOG_UUID] (state, payload) {
        localStorage.setItem('Log_uuid', payload);
        state.user_log.log_id= payload;
    }
}         