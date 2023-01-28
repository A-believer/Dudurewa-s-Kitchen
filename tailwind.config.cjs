/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px"
    },
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif']
      },
    },
  },
  plugins: [],
}
