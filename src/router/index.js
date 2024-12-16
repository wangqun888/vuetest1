import {createRouter,createWebHistory} from 'vue-router'
import testName from '../views/Person.vue'
import Home from '../views/home.vue'
import Abount from '../views/abount.vue'
import Formadd from '../views/formadd.vue'
import Click from '../views/Click.vue'
import Fromsub from '../views/form.vue'
import Test from '../views/test.vue'


const routes = [
	{ path: '/', component: Home },
	{ path: '/test', component: testName },
	{ path: '/click', component: Click },
	{ path: '/abount', component: Abount },
	{ path: '/formadd', component: Formadd },
	{ path: '/form', component: Fromsub },
	{ path: '/test1', component: Test },
  ]
   
const router = createRouter({
	history:createWebHistory(),
	routes,
})

export default router
