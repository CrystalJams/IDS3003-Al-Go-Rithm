import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostPage from '../views/PostPage.vue'
import PostMaker from '../views/PostMaker.vue'
import HackerNews from '../views/HackerNews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostPage
  },
  {
  path: '/hacker-news',
  name: 'hackerNews',
  component: HackerNews
  },

  {
    path: '/makr',
    name: 'postMakr',
    component: PostMaker
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
