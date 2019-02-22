import _navigation from '../../mutation-types/navigation';

export default {
  [_navigation.ROUTE_TO_TAB] (state, payload) {
    state.selectedTab = payload;
  },
  [_navigation.ROUTE_TO_AUTH] (state, payload) {
    state.selectedAuthTab = payload;
  }
};