//AUTH MUTATIONS
import _authentication from '../../mutation-types/authentication';

export default {
    [_authentication.LOGIN_USER] (state, payload) {
        state.user_token = payload;
    },

    [_authentication.USER_REGISTRATION] (state, payload){
        state.user.name = payload.data.name,
        state.user.email = payload.data.email
    },

    [_authentication.USER_LOGOUT] (state){
        state.user.name = null,
        state.user.email = null,
        localStorage.removeItem('Auth_Token');
    },
    [_authentication.SET_USER_TOKEN] (state, payload){
        state.user_token = payload;
    },

    [_authentication.STORE_USER_TOKEN] (state, payload){
        localStorage.setItem('Auth_Token', payload);
    },
}