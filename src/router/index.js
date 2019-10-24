import Vue from "vue"
import VueRouter from "vue-router"
import Meta from 'vue-meta'
import index from "../pages/index"

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
    routes:[{
        path:"/index",
        component:index
    }]
})

