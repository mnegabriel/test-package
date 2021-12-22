import Vue from 'vue'

import './plugins/bootstrap-vue'

Vue.config.productionTip = false

import App from './App.vue'

export default (selector) => {
    import('./app.scss').then(() => {
        new Vue({
            render: h => h(App),
        }).$mount(selector)

    })
}
