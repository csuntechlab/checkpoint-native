//Instance imports
import Vue from 'nativescript-vue';
import axios from 'axios';
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
import store from './store';

//Main components
import Index from './components/authentication/Index';
import App from "./components/App";

// DEVTOOLS CONFIGURATION
import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools)
Vue.config.silent = true;
TNSFontIcon.debug = false;

axios.defaults.baseURL = 'https://www.sandbox.csun.edu/metalab/dev/checkpoint';


new Vue({
    store,
    localstorage,
    created() {
        store.dispatch('getUserTokenFromLocalStorage');
    },
    render: h => h('frame', [h(store.getters.user_token ? App : Index)])
}).$start();
