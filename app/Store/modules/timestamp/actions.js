//AUTH ACTIONS
import _timestamp from '../../mutation-types/timestamp';
//AUTH APIS
import Auth from '../../../api/timestamp';


export default {
    postUserLogin (context, payload) {
        Auth.postUserLoginAPI(
            payload,
            (success) => {
                context.commit(_authentication.LOGIN_USER, success.data.access_token);
                context.commit(_authentication.STORE_USER_TOKEN, success.data.access_token);

            },
            (error) => console.log("Login error in actions " + error),
        );
    },
  };

  