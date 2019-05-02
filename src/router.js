import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/slides",
      name: "slides",
      component: () =>
        import(/* webpackChunkName: "slides" */ "./views/Slides.vue")
    }
  ]
});
