/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#2F2694",
        "active":"#BAF1FF",
        "active_slider":"#BE69D5"
      }
    },
  },
  plugins: [],
}

