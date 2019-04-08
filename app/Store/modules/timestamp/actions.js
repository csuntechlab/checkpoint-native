//CLOCK MUTATION TYPES
import _timestamp from '../../mutation-types/timestamp';
//CLOCK APIS
import Time from '../../../api/timestamp';

export default {
    postUserClockIn (context, payload) {
        Time.postUserClockInAPI(
            payload,
            (success) => {
                context.commit(_timestamp.CLOCK_IN, success);
                context.commit(_timestamp.STORE_LOG_UUID, success.data.log_uuid);
            },
            (error) => console.log("Clock-in error in actions " + error),
        );
    },
    postUserClockOut (context, payload) {
        Time.postUserClockOutAPI (
            payload,
            (success) => {
                context.commit(_timestamp.CLOCK_OUT, success.data.message_success);
            },

            (error) => console.log("Clock-out error in actions " + error),
        );
    },
    setStatusFromLocalStorage (context) {
        context.commit(_timestamp.UPDATE_USER_STATUS);
    }
  };

   