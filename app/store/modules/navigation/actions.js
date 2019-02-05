// NAV ACTIONS
//
import _navigation from '../../mutation-types/navigation';

export default {
  routeToTab ({ commit }, payload) {
    commit(_navigation.ROUTE_TO_TAB, payload);
  }
};
