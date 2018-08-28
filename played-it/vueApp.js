var baseUrl = "https://api.github.com/repositories/137301268/contents/played-it/data/";

const vm = new Vue({
  el: '#app',
  data: {
    previousSuffix: "",
    currentSuffix: "",
    suffix: "",
    results: [],
    counter: 0
  },
  mounted() {
      this.getData("");
  },
  methods: {
    getData: function(suffix) {
      console.log('suffix=' + suffix);
      var url = baseUrl + suffix;
      console.log(url);
      axios.get(url).then(response => { this.results = response.data });
    }
  }
});
