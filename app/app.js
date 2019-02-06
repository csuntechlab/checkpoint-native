import Vue from 'nativescript-vue';
import login from './components/Login';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
// import VueDevtools from 'nativescript-vue-devtools';
import store from './store';

// Vue.use(VueDevtools)
// Vue.config.silent = false;



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
