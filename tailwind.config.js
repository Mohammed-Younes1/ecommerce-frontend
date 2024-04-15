/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue_cust':'#0274be',
        'border-blue':'#036596',
        'blue-light':'#ebf4fa'
      }
    },
  },
  plugins: [],
}