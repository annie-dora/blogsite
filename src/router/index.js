import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import addBlog from '@/views/addBlog.vue'
import blogSite from '@/views/blogSite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: addBlog,
    name: "addBlog"
  },
  {
    path:'/blogSite',
    component: blogSite,
    name: 'blogSite'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
