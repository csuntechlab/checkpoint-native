//AUTH ACTIONS
import _authentication from '../../mutation-types/authentication';
//AUTH APIS
import Auth from '../../../api/authentication';


export default {
    postUserLogin ({ commit }, payload) {
        Auth.postUserLoginAPI(
            payload,
            (success) => {
                commit(_authentication.LOGIN_USER, success);
            },
            (error) => console.log(error),
        );
    },
    postUserRegisteration({ commit, dispatch }, payload){
        console.log("this is the payload" + payload.name);
        Auth.postUserRegisterationAPI(
            payload,
            (success) => {
                // console.log(success)
                commit(_authentication.USER_REGISTRATION, success);
            },
            (error) => console.log(error),
        );
    }
  };

  