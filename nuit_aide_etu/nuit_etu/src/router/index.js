import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Index from '../components/Index'
import Informations from '../components/Informations'
import ChercherCentre from '../components/ChercherCentre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ChercherCentre',
      name: 'ChercherCentre',
      component: ChercherCentre
    },
    {
      path: '/Informations',
      name: 'Informations',
      component: Informations
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'Index',
      component: Index
    }

  ]
})
