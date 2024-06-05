import "./index.css";

import { createApp } from "vue";
<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
=======
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 8b695b3 (feat: map with bins)
import App from "./App.vue";
import HomeView from "./pages/HomeView.vue";
import ExploreView from "./pages/ExploreView.vue";
import DashboardView from "./pages/DashboardView.vue";
import ProfileView from "./pages/ProfileView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/explore", component: ExploreView },
  { path: "/dashboard", component: DashboardView },
  { path: "/profile", component: ProfileView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

<<<<<<< HEAD
app.use(router);
=======
library.add(fas);
app.use(createPinia());
>>>>>>> 8b695b3 (feat: map with bins)

app.component('fa', FontAwesomeIcon).mount("#app");
