/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_main: '#52B2BF',
        heading: '#0F172A',
        paragraph: '#757C88'
      },
      screens: {
        '1660px': '1660px',
        '1300px': '1300px',
        '1040px': '1040px',
        '768px': '768px',
        '400px': '400px',
      }
    },
  },
  plugins: [],
}