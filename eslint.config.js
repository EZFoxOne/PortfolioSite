// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

/**
 * Flat config for ESLint v9+
 * - JS base rules
 * - TypeScript (type-aware on TS/TSX)
 * - React Hooks + React Refresh
 * - No legacy .eslintrc or babel parser required
 */
export default [
    // Ignore generated/build artifacts
    {
        ignores: [
            "dist",
            "build",
            "coverage",
            "node_modules",
            ".vite",
            ".turbo",
            "**/*.d.ts",
        ],
    },

    // Base JS recommended
    js.configs.recommended,

    // TypeScript base + stylistic (non-type-aware)
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,

    // Type-aware rules only for TS/TSX
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: new URL(".", import.meta.url),
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            // TS hygiene
            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports", fixStyle: "separate-type-imports" },
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],

            // Safer code defaults
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            "no-undef": "off", // TS handles this

            // React 19 ergonomics
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    },

    // JS/TS shared globals for non-type-aware files
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
];
