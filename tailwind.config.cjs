/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: {
          light: "#A7F3D0",
          DEFAULT: "#1fd527",
          dark: "#43a047",
        },
      },
    },
  },
  plugins: [],
});
