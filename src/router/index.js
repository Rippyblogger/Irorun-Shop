import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Men from "../views/Men.vue";
import Women from "../views/Women.vue";
import Cart from "../views/Cart.vue";
import All from "../views/All.vue";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Men",
		name: "Men",
		component: Men,
	},
	{
		path: "/Women",
		name: "Women",
		component: Women,
	},
	{
		path: "/Cart",
		name: "Cart",
		component: Cart,
	},
	{
		path: "/All",
		name: "All",
		component: All,
	},
	{
    path: '*',
    name: 'Not Found',
		component: NotFound,
	},

	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
