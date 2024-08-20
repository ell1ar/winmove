import VueSplide from "@splidejs/vue-splide";
import "animate.css";
import { createApp } from "vue";
import { createVfm } from 'vue-final-modal';
import 'vue-final-modal/style.css';
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "./assets/font/style.css";
import "./styles/main.scss";
import Main from "./views/Main/Index.vue";
import vClickOutside from "click-outside-vue3"

const routes = [{ path: "/", component: Main }];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

const app = createApp(App);
const vfm = createVfm()
app.use(vfm);
app.use(router);
app.use(VueSplide);
app.use(vClickOutside);

(async () => {
    const components = import.meta.glob("./components/**/*.vue");
    for (const path in components) {
        const component = await components[path]();
        const relativePath = path.replace(/^.*\/components\//, "").replace(/\.\w+$/, "");
        const componentName = relativePath.replace(/\//g, "");
        app.component(componentName, component.default);
    }
    app.mount("#app");
})();
