/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "rgba(220, 202, 135, 1)",
      bgColor: "rgba(12, 11, 8, 1)",
      gray: "rgba(170, 170, 170, 1)",
      white: "rgba(255, 255, 255, 1)",
    },
    fontFamily: {
      serif: ["Cormorant Upright", "serif"],
      sans: ["Open Sans", "serif"],
    },
    fontSize: {
      sm: "1rem",
      base: "1.6rem",
      xl: "2.3rem",
    },
    extend: {},
  },
  plugins: [],
};
