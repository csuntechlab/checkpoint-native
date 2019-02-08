//AUTH ACTIONS
import _authentication from '../../mutation-types/authentication';
//AUTH APIS
import Auth from '../../../api/authentication';


export default {
    postUserLogin ({ commit, dispatch }, payload) {
        Auth.postUserLoginAPI(
            payload,
            (succ) => {
                console.log(succ, 'succ');
                commit(_authentication.LOGIN_USER, payload);
            },
            (error) => console.log(error),
        );
    }
  };