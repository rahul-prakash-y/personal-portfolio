import { heroui } from '@heroui/theme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        '3xl':'1800px'
      }
    },
    fontFamily:{
      poppins: ["Poppins", "sans-serif"],
    },

  },

  darkMode: "class",
  plugins: [heroui()],
}

