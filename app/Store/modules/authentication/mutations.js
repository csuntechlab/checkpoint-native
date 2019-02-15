//AUTH MUTATIONS
import _authentication from '../../mutation-types/authentication';

export default {
    [_authentication.LOGIN_USER] (state, payload) {
        state.user_token = payload.data.access_token;
        console.log(state.user_token);
    },

    [_authentication.USER_REGISTRATION] (state, payload){
        state.user.user_name = payload.name,
        state.user.user_email = payload.email
        console.log(state.user.user_email);
    }
}