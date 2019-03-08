//CLOCK MUTATION TYPES
import _timestamp from '../../mutation-types/timestamp';
//CLOCK APIS
import Stamp from '../../../api/timestamp';

export default {
    postUserClockIn (context, payload) {
        Stamp.postUserClockInAPI(
            payload,
            (success) => {
                context.commit(_timestamp.CLOCK_IN, success);
                context.commit(_timestamp.UPDATE_USER_STATUS, success);
            },
            (error) => console.log("Clock-In error in actions " + error),
        );
    },
  };

  