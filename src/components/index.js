import InputButton from './InputButton.vue'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

const components = {
    InputButton
}

async function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    await import('bootstrap/dist/css/bootstrap.css')
    await import('bootstrap-vue/dist/bootstrap-vue.css')
    import('bootstrap-vue').then(({ BootstrapVue, IconsPlugin }) => {

        Vue.use(BootstrapVue)
        Vue.use(IconsPlugin)

        Object.entries(components).forEach(([name, comp]) => {
            Vue.component(name, comp);
        })
    })

}

export default {
    install
}