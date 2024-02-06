/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor:"#0067FF",
        yellowColor:"#FFB60D",
        purpleColor:"#9771FF",
        headingColor:"#181A1E",
        textColor:"#4E545F",
        irishBlueColor:"#2DAA9D",

      },
      boxShadow:{
        pannelShadhow:"rgba(17,12,46,0.15) 0px 48px 100px 0px",
      }
    },
  },
  plugins: [],
}

