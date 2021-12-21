import InputButton from './InputButton.vue'

const components = {
    InputButton
}

function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Object.entries(components).forEach(([name, comp]) => {
        console.log(name)
        console.log(comp)
        Vue.component(name, comp);
    })
}

export default {
    install
}

// export default components