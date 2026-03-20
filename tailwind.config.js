/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Enriqueta for headings/titles
        serif: ['Enriqueta', 'serif'],
        // Inter for everything else
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}