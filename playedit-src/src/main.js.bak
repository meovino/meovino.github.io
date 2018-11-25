// Tutorial - https://www.adcisolutions.com/knowledge/how-build-single-page-application-spa-vuejs?utm_source=medium&utm_medium=social&utm_campaign=medium-story-buildSPA-2&utm_term=-&utm_content=medium-buildSPA-PR

import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Countries from './components/Countries.vue'
import States from './components/States.vue'
import Metros from './components/Metros.vue'
import Zips from './components/Zips.vue'
import Courses from './components/Courses.vue'
import Course from './components/Course.vue'

// https://meovino.github.io/played-it/data/ - returns list of Countries
// https://meovino.github.io/played-it/data/:country - returns list of StateProvinces
// https://meovino.github.io/played-it/data/:country/:stateProvince - returns list of Metros
// https://meovino.github.io/played-it/data/:country/:stateProvince/:metro - returns list of Zips
// https://meovino.github.io/played-it/data/:country/:stateProvince/:metro/:zip - returns list of Courses
// https://meovino.github.io/played-it/data/:country/:stateProvince/:metro/:zip/:course - returns Course data

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/countries',
      name: 'countries',
      component: Countries,
      props: true,
    },
    {
      path: '/:country',
      name: 'states',
      component: States,
      props: true,
    },
    {
      path: '/:country/:state',
      name: 'metros',
      component: Metros,
      props: true,
    },
    {
      path: '/:country/:state/:metro',
      name: 'zips',
      component: Zips,
      props: true,
    },
    {
      path: '/:country/:state/:metro/:zip',
      name: 'courses',
      component: Courses,
      props: true,
    },
    {
      path: '/:country/:state/:metro/:zip/:course',
      name: 'course',
      component: Course,
      props: true,
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
