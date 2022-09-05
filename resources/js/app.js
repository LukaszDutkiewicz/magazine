import Vue from 'vue'
import mainVue from "./components/mainVue"
import routes from "./routes"
import VueResource from "vue-resource"
import Vuetify from '../plugins/vuetify'
import VueRouter from 'vue-router'


window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter(routes);

const app = new Vue({
    vuetify: Vuetify,

    el: '#app',
    router: router,
    components: {
        mainVue
    }
});




export const bus = new Vue()