<!-- Courses.vue -->
<template lang="html">
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-5">
        <h2>Golf courses in {{ metro | replaceUS }}</h2>
        <router-link
          v-for="course in courses"
          v-bind:key="course.name"
          :to="{ name: 'course', params: {course: course.item} }">
          {{course.name}}<br />
        </router-link>
      </div>
      <div class="col-md-5">
        <h2>Contribute to Our Reviews</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
    <hr>
  </div> <!-- /container -->
</template>

<style>
  body {
    padding-top: 4rem;
  }
</style>

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
        axios(this.endpoint + this.country + '/' + this.state + '/' + this.metro + '/')
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

    filters: {
      replaceUS: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.replace("_", " ")
      }
    },

    watch: {
      '$route'() {
        this.getCourses();
      }
    }
  }
</script>
