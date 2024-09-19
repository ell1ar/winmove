import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

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
            { find: "@icons", replacement: fileURLToPath(new URL("./src/components/icons", import.meta.url)) },
        ],
    },
    base: "/winmove/",
});
