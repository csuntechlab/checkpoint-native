import Vue from 'nativescript-vue';
import Vuex from 'vuex';

//module imports
import navigation from './modules/navigation';
import authentication from './modules/authentication';
import clock from './modules/clock';
import user from "./modules/user";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        navigation,
        authentication,
        clock,
        user,
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
});