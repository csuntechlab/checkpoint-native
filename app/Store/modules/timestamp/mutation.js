//AUTH MUTATIONS
import _timestamp from '../../mutation-types/timestamp';

export default {
    [_timestamp.CLOCK_IN] (state, payload) {
        state.user_clock_in = payload;
    },
}