import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import prettier from "eslint-config-prettier"
import tailwind from "eslint-plugin-tailwindcss"

const config = [
    ...nextCoreWebVitals,
    ...tailwind.configs["flat/recommended"],
    prettier,
    {
        ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
    },
    {
        rules: {
            "@next/next/no-html-link-for-pages": "off",
            "react/jsx-key": "off",
            "tailwindcss/no-custom-classname": "off",
            // Patrón estándar de next-themes para evitar mismatch de hidratación
            "react-hooks/set-state-in-effect": "off",
        },
        settings: {
            tailwindcss: {
                callees: ["cn", "cva"],
                config: "tailwind.config.js",
            },
        },
    },
]

export default config
