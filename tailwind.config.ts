// tailwind.config.ts
import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#030712", // near-black
                surface: "#0f172a",    // slate-900 variant
                primary: {
                    DEFAULT: "#10b981",  // emerald-500
                    light: "#34d399",
                    dark: "#059669",
                },
                secondary: {
                    DEFAULT: "#64748b",  // slate-500
                    light: "#94a3b8",
                    dark: "#475569",
                },
                accent: {
                    DEFAULT: "#22d3ee",  // cyan-400
                    dark: "#0891b2",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.25rem",
            },
            boxShadow: {
                glow: "0 0 15px rgba(16,185,129,0.5)",
            },
        },
    },
    plugins: [forms, typography, aspectRatio],
} satisfies Config;
