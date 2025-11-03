/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#5fb6f9',
        primary2: '#5fb6f952',
        primary3: '#5fb6f928',
        black:'#1e2832',
      },
      fontFamily:{
        "graphic" : 'graphic',
        "hezargan" : 'hezargan',
      }
    },
  },
  plugins: [],
}

