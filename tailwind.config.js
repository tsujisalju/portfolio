/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "325px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-m-plus)", "sans-serif"],
        serif: ["var(--font-ovo)", "serif"],
        display: [
          "var(--font-syne)",
          "Syne",
          "var(--font-source-serif)",
          "serif",
        ],
        code: ["var(--font-m-plus-code)", "monospace"],
        hyper: ["var(--font-gasoek-one)", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
