<template lang="html">
  <div>
    <h1>Countries with golf courses</h1>
    // Countries.vue
    <pre>{{ countries }}</pre>
      <router-link
        v-for="country in countries"
        v-bind:key="country.name"
        :to="{ name: 'states', params: {country: country.item} }">
        {{country.name}}. {{country.item}}<br /><br />
      </router-link>
  </div>
</template>

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
