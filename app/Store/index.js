import Vue from 'nativescript-vue';
import Vuex from 'vuex';

//module imports
import navigation from './modules/navigation';
import authentication from './modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        navigation,
        authentication
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
});
