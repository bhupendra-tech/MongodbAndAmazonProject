/** @type {import('tailwindcss').Config} */
import colors from "./src/theme/color"

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors 
    },
  },
  plugins: [],
}

