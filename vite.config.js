import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"], // Input files for Vite
            refresh: true, // Enable auto-refresh during development
        }),
    ],
    build: {
        outDir: "public/build", // Output the build files to the 'public/build' directory
        manifest: true, // This will generate a manifest file that Vercel needs
    },
});
