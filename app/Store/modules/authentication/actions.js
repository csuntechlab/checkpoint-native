//AUTH ACTIONS
import _authentication from '../../mutation-types/authentication';
//AUTH APIS
import Auth from '../../../api/authentication';


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
    postUserRegisteration(context, payload){
        Auth.postUserRegisterationAPI(
            payload,
            (success) => {
                context.commit(_authentication.USER_REGISTRATION, success);
                context.dispatch('postUserLogin',
                {
                    username: payload.email,
                    password: payload.password
                })
            },
            (error) => console.log("Registration error in actions " + error),
        );
    },
    postUserLogout(context){
        Auth.postUserLogoutAPI(
             "Bearer " + context.getters.user_token,
            () => {
                context.commit(_authentication.USER_LOGOUT)
            },
            (error) => console.log("Logout error in actions " + error),
        );
    },
    getUserTokenFromLocalStorage(context) {
        context.commit(_authentication.SET_USER_TOKEN, localStorage.getItem('Auth_Token'));
    }
  };

  