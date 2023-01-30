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
      backgroundImage: {
        "bIa": "url('./assets/bgImg1.jpg')",
        "bIb": "url('./assets/bgImg2.jpg')",
        "bIc": "url('./assets/bgImg3.jpg')",
        "bId": "url('./assets/bgImg4.jpg')",
        "bIe": "url('./assets/newBg.png')",
      }
    },
  },
  plugins: [],
}
