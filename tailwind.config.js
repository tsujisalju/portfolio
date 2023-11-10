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
        sans: ["var(--font-karla)", "sans-serif"],
        serif: ["var(--font-source-serif-pro)", "serif"],
        display: ["Sinistre", "var(--font-source-serif-pro)", "serif"],
        handwritten: ["var(--font-zeyada)", "serif"],
        xivmeter: ["Eurostar Extended", "var(--font-gruppo)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
