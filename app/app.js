import Vue from 'nativescript-vue';
import login from './components/Login';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
import store from './store';

// UNCOMMENT THESE LINES TO USE DEVTOOLS
// import VueDevtools from 'nativescript-vue-devtools';
// Vue.use(VueDevtools)

Vue.config.silent = false;
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
    'fa': './fonts/font-awesome.css',
    'ion': './fonts/ionicons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

new Vue({
    store,
    render: h => h('frame', [h(login)])
}).$start();
