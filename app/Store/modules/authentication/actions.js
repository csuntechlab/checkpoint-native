//AUTH ACTIONS
import _authentication from '../../mutation-types/authentication';

export default {
    verifyLogin ({ commit }, payload) {
      commit(_navigation.ROUTE_TO_TAB, payload);
    }
  };