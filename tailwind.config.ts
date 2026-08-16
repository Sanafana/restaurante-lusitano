import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lusitano: {
          bg: "#0d0c0a",
          surface: "#141310",
          card: "#1b1916",
          border: "#2b2620",
          borderLight: "#3d362e",
          gold: "#c59b27",
          goldLight: "#dfb743",
          goldMuted: "#876c1e",
          goldDark: "#52410f",
          wine: "#5c141d",
          wineDark: "#3a0c12",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
