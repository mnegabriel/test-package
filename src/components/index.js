import InputButton from './InputButton.vue'

export const components = {
    InputButton
}

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Object.entries(components).forEach(([name, comp]) => {
        Vue.component(name, comp);
    })
}

export default {
    install
}

// export default components