/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js, jsx}",
  ],
  theme: {
    colors: {
      blue: {
        ...colors.blue,
      },
      cyan: colors.cyan,
      green: colors.green,
      pink: colors.pink,
      white: colors.white,
      indigo: colors.indigo,
      transparent: colors.transparent,
      orange: colors.orange,
      purple: colors.purple
    }
  },
  plugins: [],
}
