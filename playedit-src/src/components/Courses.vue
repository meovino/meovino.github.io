<template lang="html">
  <div>
    <h1>Courses</h1>
    country - {{ country }}<br />
    state - {{ state }}<br />
    metro - {{ metro }}<br />
    zip - {{ zip }}<br />
    <pre>{{ courses }}</pre>
    <router-link
      v-for="course in courses"
      v-bind:key="course.name"
      :to="{ name: 'course', params: {course: course.item} }">
      {{course.name}}. {{course.item}}<br /><br />
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['country', 'state', 'metro', 'zip'],

    data() {
      return {
        courses: null,
        endpoint: 'https://meovino.github.io/played-it/data/',
      }
    },

    methods: {
      getCourses() {
        axios(this.endpoint + this.country + '/' + this.state + '/' + this.metro + '/' + this.zip + '/')
          .then(response => {
            this.courses = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },

    created() {
      this.getCourses();
    },

    watch: {
      '$route'() {
        this.getCourses();
      }
    }
  }
</script>
