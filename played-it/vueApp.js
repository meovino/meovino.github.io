var countriesUrl = "https://api.github.com/repositories/137301268/contents/played-it/data/";

const home = {
  template: '<div style = "border-radius:20px;background-color:red;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is the home route</div>'
}
const Route1 = {
  template: '<div style = "border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 1</div>'
}
const Route2 = {
  template: '<div style = "border-radius:20px;background-color:green;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 2</div>'
}
const routes = [
   { path: '/home', component: home },
   { path: '/route1', component: Route1 },
   { path: '/route2', component: Route2 }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

const vm = new Vue({
        el: '#app',
        router,
        data: {
          results: []
        },
        mounted() {
            this.getData();
        },
        methods: {
          getData() {
            axios.get(countriesUrl).then(response => {
              this.results = response.data
            })
          }
        }
      });
