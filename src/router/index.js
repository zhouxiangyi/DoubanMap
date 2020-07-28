import Vue from 'vue'
import VueRouter from 'vue-router'
import Douban from '../views/Douban.vue'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/Douban/movie'
	},
	{
		path: '/Douban',
		name: 'Douban',
		component: Douban,
		children: [{
			path: ':id',
			component: () => import( /* webpackChunkName: "about" */ '../components/DoubanContent/DoubanContent.vue')
		}]

	},
	{
		path: '/MainMusic',
		name: 'MainMusic',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Mainmusic.vue')
	},
	{
		path: '/Map',
		name: 'Map',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Map.vue')
	}, ,
	{
		path: '/My',
		name: 'My',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/My.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
