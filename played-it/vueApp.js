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
      } else if (suffix.indexOf(".") == 0) {
        url = url + suffix;
      } else {
        url = url + suffix + "/";
      }
      axios.get(url).then(response => { this.results = response.data });
      console.log("url after " + url);
    },
    goBack: function() {
      axios.get(priorUrl).then(response => { this.results = response.data });
      url = priorUrl;
    }
  }
});
