/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["GothamBook", "sans-serif"],
      },

      gridTemplateColumns: {
        web: "241px 1fr",
      },

      gridTemplateRows: {
        web: "64px calc(100vh - 96px - 64px) 96px",
      },

      colors: {
        springGreen: "#1ed760",
        green: "#159643",
        forestGreen: "#004638",
        midnightBlue: "#191d46",
        darkSlateBlue: "#4022a8",
        silver: "#b2b2b2",
        ebony: "#121212",
        crow: "#181818",
        black: "#000",
      },
    },
  },
  plugins: [],
}
