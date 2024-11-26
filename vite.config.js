import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    build: {
        outDir: "dist", // You can use 'dist' here or 'public/build' for Laravel compatibility
        manifest: true, // This ensures proper linking of assets
        emptyOutDir: true, // Clear output directory before each build
    },
});
