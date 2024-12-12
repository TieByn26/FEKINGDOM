/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: colors.black,
      },
      fontSize: {
        h1: "56px",
        h2: "42px",
        h3: "28px",
        h4: "21px",
      },
      boxShadow: {
        "custom-light": "0px 12px 48px 0px rgba(0, 44, 109, 0.10)",
      },
    },
  },
  plugins: [],
};
