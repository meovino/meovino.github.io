<template lang="html">
  <div>
    <h1>Course</h1>
    country - {{ country }}<br />
    state - {{ state }}<br />
    metro - {{ metro }}<br />
    zip - {{ zip }}<br />
    <pre>{{ course }}</pre>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['country', 'state', 'metro', 'zip', 'course'],

    data() {
      return {
        course: null,
        endpoint: 'https://meovino.github.io/played-it/data/',
      }
    },

    methods: {
      getCourse() {
        axios(this.endpoint + this.country + '/' + this.state + '/' + this.metro + '/' + this.zip + '/' + this.course)
          .then(response => {
            this.course = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },

    created() {
      this.getCourse();
    },

    watch: {
      '$route'() {
        this.getCourse();
      }
    }
  }
</script>
