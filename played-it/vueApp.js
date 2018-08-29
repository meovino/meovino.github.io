var url = "";
var priorUrl = "";
var baseUrl = "https://meovino.github.io/played-it/data/";
// contents api - https://api.github.com/repos/meovino/meovino.github.io/contents
// trees api - https://api.github.com/repos/meovino/meovino.github.io/git/trees/{sha}

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
      console.log("url before " + url);
      priorUrl = url;
      if (url == "") {
        url = baseUrl;
      } else {
        url = url + suffix + "/";
      }
      console.log("url after " + url);
      axios.get(url).then(response => { this.results = response.data });
    },
    goBack: function() {
      axios.get(priorUrl).then(response => { this.results = response.data });
      url = priorUrl;
    }
  }
});
