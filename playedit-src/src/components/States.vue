<!-- States.vue -->
<template lang="html">
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-5">
        <h2>States with golf courses</h2>
        <router-link
          v-for="state in states"
          v-bind:key="state.name"
          :to="{ name: 'metros', params: {state: state.item} }">
          {{state.name}}<br />
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
    props: ['country'],

    data() {
      return {
        states: null,
        endpoint: 'https://meovino.github.io/played-it/data/',
      }
    },

    methods: {
      getStates() {
        axios(this.endpoint + this.country + '/')
          .then(response => {
            this.states = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },

    created() {
      this.getStates();
    },

    watch: {
      '$route'() {
        this.getStates();
      }
    }
  }
</script>
