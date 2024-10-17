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
        serif: ["var(--font-m-plus-code)", "serif"],
        display: ["var(--font-sinistre)", "var(--font-source-serif)", "serif"],
        code: ["var(--font-m-plus-code)", "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
