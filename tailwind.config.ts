import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lusitano: {
          bordo: "#6B1D2F",
          bordoEscuro: "#4A121F",
          bordoClaro: "#8C263E",
          dourado: "#D4AF37",
          douradoEscuro: "#B8860B",
          douradoClaro: "#F3E5AB",
          creme: "#FDFBF7",
          bege: "#F5EFE6",
          carvao: "#1C1917",
          castanho: "#292524",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;