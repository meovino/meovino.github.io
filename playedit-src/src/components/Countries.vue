<template lang="html">
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-5">
        <h2>Countries with golf courses</h2>
          <router-link
            v-for="country in countries"
            v-bind:key="country.name"
            :to="{ name: 'states', params: {country: country.item} }">
            {{country.name}}<br />
          </router-link>
        <p>Scroll through our list of courses to read reviews.</p>
        <p><router-link :to="{ name: 'countries', params: {} }" class="btn btn-secondary" role="button">View details &raquo;</router-link></p>
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
    data() {
      return {
        countries: null,
        endpoint: 'https://meovino.github.io/played-it/data/',
      }
    },

    methods: {
      getCountries() {
        axios(this.endpoint)
          .then(response => {
            this.countries = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },

    created() {
      this.getCountries();
    },

    watch: {
      '$route'() {
        this.getCountries();
      }
    }
  }
</script>
