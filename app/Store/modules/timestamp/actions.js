//CLOCK MUTATION TYPES
import _timestamp from '../../mutation-types/timestamp';
//CLOCK APIS
import Time from '../../../api/timestamp';

export default {
    postUserClockIn (context, payload) {
        Time.postUserClockInAPI(
            payload,
            (success) => {
                context.commit(_timestamp.CLOCK_IN, payload);
                context.commit(_timestamp.STORE_LOG_UUID, success.data.log_uuid);
            },
            (error) => TNSFancyAlert.showError("Clock In Failed", error),
        );
    },
    postUserClockOut (context, payload) {
        Time.postUserClockOutAPI (
            payload,
            (success) => {
                context.commit(_timestamp.CLOCK_OUT, payload);
            },

            (error) => TNSFancyAlert.showError("Clock Out Failed", error),
        );
    },
    setStatusFromLocalStorage (context) {
        context.commit(_timestamp.UPDATE_USER_STATUS);
    }
  };

   