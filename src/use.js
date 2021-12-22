import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import App from './App.vue'

export default async (selector) => {
    await import('bootstrap/dist/css/bootstrap.css')
    await import('bootstrap-vue/dist/bootstrap-vue.css')

    Vue.config.productionTip = false

    Vue.use(BootstrapVue)
    Vue.use(IconsPlugin)

    new Vue({
        render: h => h(App),
    }).$mount(selector)
}
