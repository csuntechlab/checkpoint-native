//Instance imports
import Vue from 'nativescript-vue';
import axios from 'axios';

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
import login from './components/Login';

// DEVTOOLS CONFIGURATION
// import VueDevtools from 'nativescript-vue-devtools';
// Vue.use(VueDevtools)
Vue.config.silent = true;
TNSFontIcon.debug = false;

axios.defaults.baseURL = 'https://www.sandbox.csun.edu/metalab/dev/checkpoint';


new Vue({
    store,
    render: h => h('frame', [h(login)])
}).$start();
