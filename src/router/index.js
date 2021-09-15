import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import About from '../views/About'
import Feature from '../views/Feature'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
        component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
    {
        path: '/feature',
        name: 'feature',
        component: Feature,
    }
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
