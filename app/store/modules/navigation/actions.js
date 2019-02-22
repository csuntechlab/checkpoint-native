// NAV ACTIONS
//
import _navigation from '../../mutation-types/navigation';

export default {
  routeToTab ({ commit }, payload) {
    commit(_navigation.ROUTE_TO_TAB, payload);
  },
  routeToAuthentication(context, payload){
    context.commit(_navigation.ROUTE_TO_AUTH, payload);
  }
};
