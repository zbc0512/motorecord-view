import Vue from "vue"
import Router from "vue-router"
import routes from "./common/config/router.js"

Vue.use(Router)

export default new Router({
    mode: 'history', // 去掉url中的#
	routes
})