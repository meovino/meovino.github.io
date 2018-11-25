import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Post from './components/Post.vue'
import Hello from './components/Hello.vue'
import Comments from './components/Comments.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
      props: true,
    },
    {
      path: '/post/:id/comments',
      name: 'comments',
      component: Comments,
      props: true,
    },
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
