/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "myblue":"#0064E6"
      },
      fontFamily: {
        "poppins":["Poppins", "sans-serif"],
        "afacad": ["Afacad", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      }
    },
    
  },
  plugins: [],
}

