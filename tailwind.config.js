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
        "blue-link-hover":"#0769DA",
        "dark-grey": "#27323F",
        "mid-greyish":"#48515B",
      },
      screens: {
        'hxl':'1000px',
        'hlg':'900px',
        'xsm': '540px',
        'xxsm': '400px',
        'exsm': '300px', 
      },
      fontSize: {
        'xxsm': '0.625rem',
        'xsmt': '0.6875rem', 
        'smish': '0.75rem',
      }
    },
  },
  plugins: [],
}
