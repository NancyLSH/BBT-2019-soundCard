import Vue from "vue"
import VueRouter from "vue-router"
import Meta from 'vue-meta'
import index from "../pages/index"
import record from "../pages/record"
import poster from "../pages/poster.vue"

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
    routes: [{
        name:"index",
        path: "/index",
        component: index
    }, {
        name:"record",
        path: "/record",
        component: record
    },{
        name:"poster",
        path:"/poster",
        component:poster
    }]
})