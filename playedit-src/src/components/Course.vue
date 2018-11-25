<!-- Course.vue -->
<template lang="html">
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-7">
        <h2>{{ course.name }}</h2>
        {{ course.streetAddress }}<br />
        {{ course.city }}, {{ course.state }}  {{ course.postalCode }}<br />
        <div
          v-for="review in orderedReviews"
          v-bind:key="review.id">
          {{ review.user }} - {{ review.date }}:
          <a :href="review.link" target="_blank">{{ review.link }}</a><br /><br />
        </div>
      </div>
      <div class="col-md-3">
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
        axios(this.endpoint + this.country + '/' + this.state + '/' + this.metro + '/' + this.course)
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
