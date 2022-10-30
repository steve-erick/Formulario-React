/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    fontSize: {
      xl: ['25px','20px'],
      la: ['20px','15px'],
      le: ['18px','10px'],
      sm: ['15px','10px'],
      xm: ['13px','11 px'],
    },
    colors: {
      gray: {
        500: '#3C404D',
        400: '#1F2331',
        100: '#A4A4A4'
      },
      cian: {
        500: '#546ECD',
        400: '#61DAFB',
      },
      white: '#FFFFFF',
    },
    extend: { 
      fontFamily: {
        sans: 'inter, sans-serif'
      },
    },  
  },
  plugins: [],
}
