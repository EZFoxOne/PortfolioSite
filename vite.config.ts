// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig(({ mode }) => {
    const isProd = mode === "production";
    const env = loadEnv(mode, process.cwd(), "");
    const base = env.VITE_BASE?.trim() || "/";

    return {
        base,

        plugins: [
            react(),
            tailwind(),
        ],

        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
            // Prevent “invalid hook call” from duplicate React copies
            dedupe: ["react", "react-dom", "react-router", "react-router-dom"],
        },

        server: {
            host: true,
            port: 5173,
            strictPort: true,
            open: false,
        },

        preview: {
            port: 5173,
            strictPort: true,
        },

        // Drop consoles in production; keep fast transforms
        esbuild: {
            drop: isProd ? ["console", "debugger"] : [],
            target: "esnext",
        },

        build: {
            target: "esnext",
            sourcemap: !isProd,
            cssMinify: "lightningcss",

            // Avoid inlining assets in prod so everything is cacheable by URL
            assetsInlineLimit: isProd ? 0 : 4096,

            rollupOptions: {
                output: {
                    // Long-term caching file names
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: "assets/[name]-[hash].js",
                    assetFileNames: "assets/[name]-[hash][extname]",

                    // A tiny bit of structure for common libs
                    manualChunks: {
                        react: ["react", "react-dom"],
                        router: ["react-router", "react-router-dom"],
                    },
                },
            },
            chunkSizeWarningLimit: 700, // keep warnings useful but not noisy
        },

        optimizeDeps: {
            include: ["react", "react-dom", "react-router-dom"],
            esbuildOptions: { target: "esnext" },
        },

        envDir: ".", // support .env, .env.development, etc.
    };
});
