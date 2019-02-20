import Vue from "vue";
import App from "./App.vue";

import * as flag from '../dist'
console.log({ flag })

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
