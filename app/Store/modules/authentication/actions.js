//AUTH ACTIONS
import _authentication from '../../mutation-types/authentication';
//AUTH APIS
import Auth from '../../../api/authentication';

import { TNSFancyAlert } from "nativescript-fancyalert";

export default {
    postUserLogin (context, payload) {
        Auth.postUserLoginAPI(
            payload,
            (success) => {
                console.log(JSON.stringify(success));
                context.commit(_authentication.LOGIN_USER, success.data.access_token);
                context.commit(_authentication.STORE_USER_TOKEN, success.data.access_token);
            },
            (error) => TNSFancyAlert.showError("Login Failed", error),
        );
    },
    postUserRegisteration(context, payload){
        Auth.postUserRegisterationAPI(
            payload,
            (success) => {
                context.commit(_authentication.USER_REGISTRATION, success);
                context.dispatch('postUserLogin', { username: payload.email, password: payload.password });
            },
            (error) => TNSFancyAlert.showError("Registration Failed", error),
        );
    },
    postUserLogout(context){
        Auth.postUserLogoutAPI(
             "Bearer " + context.getters.user_token,
            () => {
                localStorage.removeItem('Auth_Token');
                localStorage.clear();
                context.commit(_authentication.USER_LOGOUT);
            },
            (error) => TNSFancyAlert.showError("Logout Failed", error),
        );
    },
    getUserTokenFromLocalStorage(context) {
        context.commit(_authentication.SET_USER_TOKEN, localStorage.getItem('Auth_Token'));
    }
  };

  