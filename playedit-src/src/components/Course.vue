<template lang="html">
  <div>
    <h1>Course</h1>
    country - {{ country }}<br />
    state - {{ state }}<br />
    metro - {{ metro }}<br />
    zip - {{ zip }}<br />
    name - {{ course.name }}<br />
    street-address - {{ course.streetAddress }}<br />
    city - {{ course.city }}<br />
    state - {{ course.state }}<br />
    postal-code - {{ course.postalCode }}<br />
    <div
      v-for="review in orderedReviews"
      v-bind:key="review.id">
      {{ review.user }} - {{ review.date }}:
      <a :href="review.link" target="_blank">{{ review.link }}</a><br /><br />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';

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

    computed: {
      orderedReviews: function () {
        return _.orderBy(this.course.reviews, 'date', 'desc')
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
