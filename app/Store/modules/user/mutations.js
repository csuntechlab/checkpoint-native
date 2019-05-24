//USER MUTATIONS
import _user from '../../mutation-types/user';

export default {
    [_user.USER_PROFILE](state, payload) {
        console.log("USER MUTATIONS " + JSON.stringify(payload));
    },
}