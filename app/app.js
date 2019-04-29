//Instance imports
import Vue from 'nativescript-vue';

//NPM based global imports
import localstorage from 'nativescript-localstorage';

//Font imports
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
TNSFontIcon.paths = {
    'fa': './fonts/font-awesome.css',
    'ion': './fonts/ionicons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

//Store import
import store from './Store';

//Axios import
import axios from './api';

//Main components
import Auth from './components/authentication/Index';
import App from "./components/App";

// DEVTOOLS CONFIGURATION
import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools)

Vue.config.silent = true;
TNSFontIcon.debug = false;

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

new Vue({
    store,
    localstorage,
    axios,
    created() {
        store.dispatch('getUserTokenFromLocalStorage');
        store.dispatch('setStatusFromLocalStorage');
    },
    validations: {},
    render: h => h('frame', [h(store.getters.user_token ? App : Auth)])
}).$start();

