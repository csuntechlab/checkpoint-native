import Vue from 'nativescript-vue';
import Vuex from 'vuex';

//module imports
import navigation from './modules/navigation';
import authentication from './modules/authentication';
import timestamp from './modules/timestamp';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        navigation,
        authentication,
        timestamp,
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
});