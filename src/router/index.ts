import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/LoginPage.vue'
import CadastroPage from '../views/CadastroPage.vue'
import HomePageDoador from '../views/HomePageDoador.vue'
import SobreNos from '../views/SobreNos.vue'
import SuasDoacoes from '../views/SuasDoacoes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroPage
  },
  {
    path: '/HomePageDoador',
    name: 'HomePageDoador',
    component: HomePageDoador
  },
  {
    path: '/SuasDoacoes',
    name: 'SuasDoacoes',
    component: SuasDoacoes
  },
  {
    path: '/SobreNos',
    name: 'SobreNos',
    component: SobreNos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
