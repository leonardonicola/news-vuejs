import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticleView from '@/views/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/kwk',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'article',
      component: ArticleView
    }
  ],
})

export default router
