var url = "";
var baseUrl = "https://meovino.github.io/played-it/data/";
var rslts = "";
// contents api - https://api.github.com/repos/meovino/meovino.github.io/contents
// trees api - https://api.github.com/repos/meovino/meovino.github.io/git/trees/{sha}

// components
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Home = {
  props: ['r'],
  template: `
    <div>
      This is the Home template for the Home route {{ r }}
      <div v-for="(result, index) in r">
        {{ result.item }} - {{ result.name }}<br />
      </div>
    </div>
  `
}

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


const vm = new Vue({
  el: '#app',
  router,
  data: {
    suffix: "",
    results: [],
    counter: 0,
    bu2: baseUrl,
    rslt: rslts
  },
  mounted() {
      this.getData("");
  },
  methods: {
    getData: function(suffix) {
      console.log("url before " + url);
      console.log("suffix " + suffix);
      var dotPos = suffix.indexOf(".");
      console.log("dotPos " + dotPos);
      priorUrl = url;
      if (url == "") {
        url = baseUrl;
      } else if (dotPos > 0) {
        url = url + suffix;
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
