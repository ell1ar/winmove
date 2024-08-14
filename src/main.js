import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "./styles/main.scss";
import Main from "./views/Main/Index.vue";

const routes = [{ path: "/", component: Main }];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

const app = createApp(App).use(router);

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
