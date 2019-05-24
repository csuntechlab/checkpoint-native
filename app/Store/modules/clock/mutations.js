//AUTH MUTATIONS
import _clock from "../../mutation-types/clock";

export default {
  //TIME IN
  [_clock.CLOCK_IN](state, payload) {
    state.clock_log.time_in.push(payload.data.time);
  },

  //TIME OUT
  [_clock.CLOCK_OUT](state, payload) {
    state.clock_log.time_out.push(payload.time);
  },

  //LOCAL STORAGE (NOT VUEX)
  [_clock.ADD_CLOCK_LOG_ID_LOCALLY](state, payload) {
    localStorage.setItem('Log_id', payload);
  },

  [_clock.REMOVE_CLOCK_LOG_ID_LOCALLY](state) {
    localStorage.removeItem('Log_id');
  },

  //VUEX

  //SET LOG ID
  [_clock.SET_STORE_WITH_CLOCK_LOG_ID](state) {
    state.clock_log.log_id = localStorage.getItem("Log_id");
  },

  //REMOVE LOG ID
  [_clock.REMOVE_CLOCK_LOG_ID_FROM_STORE](state) {
    state.clock_log.log_id = null;
  },

  //STATUS
  [_clock.SET_CLOCK_STATUS](state) {
    var clock_status = localStorage.getItem("Log_id") || null;
    if (clock_status) {
      state.clock_log.status = true;
    } else {
      state.clock_log.status = false;
    }
  },

  //APPROVED LOCATIONS
  [_clock.SET_CLOCK_GPS_STATUS](state, payload) {}
};
