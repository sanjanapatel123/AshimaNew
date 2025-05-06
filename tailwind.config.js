
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
         archivo: ['"Archivo Semi Expanded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
