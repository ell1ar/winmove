import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.includes("swiper"),
                },
            },
        }),
    ],
    resolve: {
        alias: [
            { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
            { find: "@assets", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)) },
        ],
    },
    base: "/winmove/",
});
