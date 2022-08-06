/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'pa-pink':'#E80B81',
        'pa-pink-light':'#FFC9E5',
        'pa-purple': '#E7BCFB'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}