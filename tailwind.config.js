/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ enable dark mode via .dark class

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f4ff",
          100: "#ece6ff",
          200: "#d6c8ff",
          300: "#b6a0ff",
          400: "#9a7cfb",
          500: "#7f5ae6",
          600: "#6a45c7",
          700: "#5937a4",
          800: "#4a2e84",
          900: "#3e286d",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },

  plugins: [],
};
