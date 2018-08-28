var baseUrl = "https://api.github.com/repositories/137301268/contents/played-it/data/";
// https://api.github.com/repos/meovino/played-it/git/trees/45cb41bb3ec39302ff40ecb199e166ae76b66d95
// https://api.github.com/repos/meovino/meovino.github.io/git/trees/45cb41bb3ec39302ff40ecb199e166ae76b66d95
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
