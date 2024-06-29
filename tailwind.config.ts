import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                primary: {
                    50: "#EEF2FF",
                    100: "#E0E7FF",
                    200: "#C7D2FE",
                    300: "#A5B4FC",
                    400: "#818CF8",
                    500: "#6366F1",
                    600: "#4F46E5",
                    700: "#4338CA",
                    800: "#3730A3",
                    900: "#312E81"
                },
                gray: {
                    100: "#F8FAFC",
                    200: "#F1F5F9",
                    300: "#E2E8F0",
                    400: "#CBD5E1",
                    500: "#abbbce",
                    600: "#64748B",
                    700: "#475569",
                    800: "#334155",
                    900: "#1E293B",
                    950: "#0F172A"
                },
                blue: {
                    100: "#d2d8e8",
                    200: "#a5b0d0",
                    300: "#7889b9",
                    400: "#4b61a1",
                    500: "#1e3a8a",
                    600: "#182e6e",
                    700: "#122353",
                    800: "#0c1737",
                    900: "#060c1c"
                },
                danger: {
                    50: "#FFF1F2",
                    100: "#FFE4E6",
                    200: "#FECDD3",
                    300: "#FDA4AF",
                    400: "#FB7185",
                    500: "#F43F5E",
                    600: "#E11D48",
                    700: "#BE123C",
                    800: "#9F1239",
                    900: "#881337"
                },
                warning: {
                    50: "#FFFBEB",
                    100: "#FEF3C7",
                    200: "#FDE68A",
                    300: "#FCD34D",
                    400: "#FBBF24",
                    500: "#F59E0B",
                    600: "#D97706",
                    700: "#B45309",
                    800: "#92400E",
                    900: "#78350F"
                },
                success: {
                    50: "#F0FDF4",
                    100: "#DCFCE7",
                    200: "#BBF7D0",
                    300: "#86EFAC",
                    400: "#4ADE80",
                    500: "#22C55E",
                    600: "#16A34A",
                    700: "#166534",
                    800: "#14532D",
                    900: "#14532D"
                },
            },
            fontFamily: {
                'sans': ['"Plus Jakarta Sans Variable"', ...defaultTheme.fontFamily.sans]
            }
        }
    },

    plugins: [
        require("@tailwindcss/typography"),
        plugin(({ addVariant }) => {
            addVariant('popper-show', '&[data-show=true]');
            addVariant('popper-hide', '&[data-show=false]');
        })
    ]
} as Config;