/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "light-grey": "#ababab",
      grey: "#c9c9c9",
      "cream-grey": "#f6f6f6f6",
      white: "#ffffff",
      blue: "#0383c9",
      black: "#333333",
      cream: "#f5ffec",
      "light-cream": "#f7fcff",
      "light-green": "#e7f4fd",
      settle: "#e6e6e6",
    },
    backgroundImage: {
      login: "url('http://localhost:3000/assets/login-left-background.png')",
    },
  },
  plugins: [],
};
