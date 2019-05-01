import _user from '../../mutation-types/user';
import User from '../../../api/user';


export default {
    getUserProfile (context) {
        User.getUserProfileAPI(
            (success) => {
                context.commit(_user.USER_PROFILE, success.data.access_token);
            },
            (error) => console.log("Login error in actions " + error),
        );
    },
}