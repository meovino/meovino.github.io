<template lang="html">
  <div>
    <pre>{{ comments }}</pre>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['id'],

    data() {
      return {
        comments: null,
        endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      }
    },

    methods: {
      getComments(id) {
        axios(this.endpoint + id + '/comments')
          .then(response => {
            this.comments = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },

    created() {
      this.getComments(this.id);
    },

    watch: {
      '$route'() {
        this.getComments(this.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    padding: 50px 20px 70px;
    &__title {
      position: relative;
      text-transform: uppercase;
      z-index: 1;
    }
    &__body {
      position: relative;
      z-index: 1;
    }
    &__id {
      position: absolute;
      font-size: 280px;
      bottom: -50px;
      margin: 0;
      color: #eeeeee;
      right: -20px;
      line-height: 1;
      font-weight: 900;
      z-index: 0;
    }
  }
</style>
