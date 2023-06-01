/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': 'Arial, Helvetica, sans-serif',
      'display' : 'Bodoni Moda, serif'
    },
    extend: {
      fontSize: {
        xxl :'200px'
      },
    },
  },
  plugins: [],
}

