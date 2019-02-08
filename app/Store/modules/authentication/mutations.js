//AUTH MUTATIONS
import _authentication from '../../mutation-types/authentication';

export default {
    [_authentication.LOGIN_USER] (state, payload) {
        console.log(payload);
    }
}