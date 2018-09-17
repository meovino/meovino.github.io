<template lang="html">
  <div>
    <h1>Zips</h1>
    country - {{ country }}<br />
    state - {{ state }}<br />
    metro - {{ metro }}<br />
    <pre>{{ zips }}</pre>
    <router-link
      v-for="zip in zips"
      v-bind:key="zip.name"
      :to="{ name: 'courses', params: {zip: zip.item} }">
      {{zip.name}}. {{zip.item}}<br /><br />
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['country', 'state', 'metro'],

    data() {
      return {
        zips: null,
        endpoint: 'https://meovino.github.io/played-it/data/',
      }
    },

    methods: {
      getZips() {
        axios(this.endpoint + this.country + '/' + this.state + '/' + this.metro + '/')
          .then(response => {
            this.zips = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },

    created() {
      this.getZips();
    },

    watch: {
      '$route'() {
        this.getZips();
      }
    }
  }
</script>
