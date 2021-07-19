import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './def-usage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})