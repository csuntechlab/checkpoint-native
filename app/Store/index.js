import Vue from 'vue'
import Vuex from 'vuex'

//module imports
import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        example
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})
