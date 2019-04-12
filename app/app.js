//Instance imports
import Vue from 'nativescript-vue';

//NPM based global imports
import localstorage from 'nativescript-localstorage';
import Vuelidate from 'nativescript-nodeify/node_modules/vuelidate';

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
import Index from './components/authentication/Index';
import App from "./components/App";

// DEVTOOLS CONFIGURATION
import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools)

Vue.config.silent = true;
TNSFontIcon.debug = false;

new Vue({
    store,
    localstorage,
    Vuelidate,
    axios,
    created() {
        console.log(this.$v);
        store.dispatch('getUserTokenFromLocalStorage');
        store.dispatch('setStatusFromLocalStorage');
    },
    render: h => h('frame', [h(store.getters.user_token ? App : Index)])
}).$start();

