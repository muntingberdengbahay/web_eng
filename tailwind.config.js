/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        university: {
          red: '#A60212',    // Primary Red
          gold: '#F5AB29',   // Accent Gold
          dark: '#80010E',   // A slightly darker red for hover states
        }
      },
    },
  },
  plugins: [],
}