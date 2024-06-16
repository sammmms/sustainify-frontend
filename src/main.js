import "./index.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import HomeView from "./pages/HomeView.vue";
import ExploreView from "./pages/ExploreView.vue";
import DashboardView from "./pages/Dashboard/DashboardView.vue";
import ProfileView from "./pages/ProfileView.vue";
import AboutUsView from "./pages/AboutUsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/explore", component: ExploreView },
  { path: "/dashboard", component: DashboardView },
  { path: "/profile", component: ProfileView },
  { path: "/about-us", component: AboutUsView },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return{
      top: 0
    }
  },
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
library.add(fas);
app.use(createPinia());

app.component("fa", FontAwesomeIcon).mount("#app");
