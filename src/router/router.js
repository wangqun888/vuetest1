import {createRouter,createWebHistory} from 'vue-router'
import testName from '../components/Person.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../views/home.vue'
import Abount from '../views/abount.vue'
import formtest from '../views/formtest.vue'
import Click from '../views/Click.vue'


const routes = [
	{ path: '/', component: Home },
	{ path: '/test', component: testName },
	{ path: '/click', component: Click },
	{ path: '/abount', component: Abount },
	{ path: '/formtest', component: formtest },
  ]
   
const router = createRouter({
	history:createWebHistory(),
	routes,
})

export default router
