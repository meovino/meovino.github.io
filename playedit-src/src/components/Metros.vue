<!-- Metros.vue -->
<template lang="html">
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-5">
        <h2>Metro areas with golf courses in {{ state | capitalize }}</h2>
        <router-link
          v-for="metro in metros"
          v-bind:key="metro.name"
          :to="{ name: 'courses', params: {metro: metro.item} }">
          {{ metro.name }}<br /><br />
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
    props: ['country', 'state'],

    data() {
      return {
        metros: null,
        endpoint: 'https://meovino.github.io/played-it/data/',
      }
    },

    methods: {
      getMetros() {
        axios(this.endpoint + this.country + '/' + this.state + '/')
          .then(response => {
            this.metros = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },

    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    },

    created() {
      this.getMetros();
    },

    watch: {
      '$route'() {
        this.getMetros();
      }
    }
  }
</script>
