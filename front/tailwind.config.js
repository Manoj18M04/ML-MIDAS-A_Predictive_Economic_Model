/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:["Oswald"]
      },
      fontSize:{
        head:"5rem",
        norm:"1.75rem",
        midas:"3rem"
      }
    },
  },
  plugins: [],
}

