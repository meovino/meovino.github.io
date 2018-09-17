<template lang="html">
  <div>
    <h1>States</h1>
    country - {{ country }}<br />
    <pre>{{ states }}</pre>
    <router-link
      v-for="state in states"
      v-bind:key="state.name"
      :to="{ name: 'metros', params: {state: state.item} }">
      {{state.name}}. {{state.item}}<br /><br />
    </router-link>
  </div>
</template>

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
