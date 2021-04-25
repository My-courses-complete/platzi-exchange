import { createApp } from "vue";

import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

import App from "./App.vue";

import "@/assets/css/tailwind.css";
import router from "@/router";

createApp(App).use(VueChartkick).use(router).mount("#app");
