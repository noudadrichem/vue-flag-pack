import Moetje from './Moetje.vue'

function install(Vue, options) {
  Vue.component(options.name || 'Moetje', Moetje)
}

export { Moetje }
export default install