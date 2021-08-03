import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);
new Vue({
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");
function Icon(arg0: string, Icon: any) {
  throw new Error("Function not implemented.");
}
