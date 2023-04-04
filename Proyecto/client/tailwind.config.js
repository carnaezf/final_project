/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [],

    // daisyui: {
    //   styled: true,
    //   themes: true,
    //   base: true,
    //   utils: true,
    //   logs: true,
    //   rtl: false,
    //   prefix: "",
    //   darkTheme: "dark",
  },
};
