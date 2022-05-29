import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/LoginPage.vue'
import CadastroPage from '../views/CadastroPage.vue'
import SobreNos from '../views/SobreNos.vue'
import SuasDoacoes from '../views/SuasDoacoes.vue'
import HomePageDoador from '../views/HomePageDoador.vue'
import CadastroFisico from '../views/CadastroFisico.vue'
import CadastroJuridico from '../views/CadastroJuridico.vue'
import HomePageJuridico from '../views/HomePageJuridico.vue'
import RegistrarDoacao from '../views/RegistrarDoacao.vue'

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
    path: '/SuasDoacoes/:id',
    name: 'DetalheSuasDoacoes',
    component: () => import('../views/DetalheSuasDoacoes.vue')
  },
  {
    path: '/SobreNos',
    name: 'SobreNos',
    component: SobreNos
  },
  {
    path: '/CadastroPf',
    name: 'CadastroPf',
    component: CadastroFisico
  },
  {
    path: '/CadastroPj',
    name: 'CadastroPj',
    component: CadastroJuridico
  },
  {
    path: '/HomePageJuridico',
    name: 'HomePageJuridico',
    component: HomePageJuridico
  },
  {
    path: '/RegistrarDoacao',
    name: 'RegistrarDoacao',
    component: RegistrarDoacao
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
