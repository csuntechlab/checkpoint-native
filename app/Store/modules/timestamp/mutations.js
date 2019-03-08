//AUTH MUTATIONS
import _timestamp from '../../mutation-types/timestamp';

export default {
    [_timestamp.CLOCK_IN] (state, payload) {
        console.log("Made it " + payload);
        // state.user_log.time_in = payload;
    },
    [_timestamp.CLOCK_OUT] (state, payload) {
        console.log(payload);
        // state.user_log.time_out = payload;
    },
    [_timestamp.UPDATE_USER_STATUS] (state, payload) {
        console.log(payload);
        // state.user_log.status = payload;
    },
}