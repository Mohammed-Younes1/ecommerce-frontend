/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        "blue_cust": "#0274be",
        "border-blue": "#036596",
        // "blue-light": "#ebf4fa",
        "blue-light": "#edf2f5",
        "blue-link": "#0573F0",
        "dark-grey": "#27323F",
        "mid-greyish":"#48515B",
      },
      screens: {
        'hlg':'900px',
        'xsm': '540px',
        'xxsm': '400px',
        'exsm': '300px', 
      },
    },
  },
  plugins: [],
}
