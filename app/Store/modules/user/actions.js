import _user from '../../mutation-types/user';
import User from '../../../api/user';


export default {
    getUserProfile (context) {
        User.getUserProfileAPI(
            (success) => {
                context.commit(_user.USER_PROFILE, 'test');
            },
            (error) => console.log("Login error in actions " + error),
        );
    },
}