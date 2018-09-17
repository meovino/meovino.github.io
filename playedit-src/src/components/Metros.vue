<template lang="html">
  <div>
    <h1>Metros</h1>
    country - {{ country }}<br />
    state - {{ state }}<br />
    <pre>{{ metros }}</pre>
    <router-link
      v-for="metro in metros"
      v-bind:key="metro.name"
      :to="{ name: 'zips', params: {metro: metro.item} }">
      {{metro.name}}. {{metro.item}}<br /><br />
    </router-link>
  </div>
</template>

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
