/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        serif: ["Bluu Next", "DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
