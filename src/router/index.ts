import { createRouter, createWebHistory } from 'vue-router'
import CocktailDetails from '@/views/CocktailDetails.vue'

const routes = [
  {
    path: '/',
    redirect: '/cocktail/margarita'
  },
  {
    path: '/cocktail/:id',
    name: 'CocktailDetails',
    component: CocktailDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
