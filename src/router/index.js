import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import myRegistro from '../views/myRegistro.vue'
import myConsulta from '../views/myConsulta.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registro',
    name: 'registro',
    component: myRegistro
    // props: {
    //   p_Apellido: route => ({ query: route.query.q })
    // }
  },
  {
    path: '/about',
    name: 'about',
    component: HomeView
  },
  {
    path: '/consulta',
    name: 'consulta',
    component: myConsulta
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
