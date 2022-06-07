import { createApp } from "vue";
import pinia from "./plugins/pinia";
import router from "./plugins/router";

import App from "./App.vue";
import "./assets/index.css";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app").$nextTick(window.removeLoading);
