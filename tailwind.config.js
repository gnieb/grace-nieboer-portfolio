/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxl :'200px'
      },
      fontFamily: {
        'body': 'Arial, Helvetica, sans-serif',
        'display' : 'Petit Formal Script, serif'
      }
    },
  },
  plugins: [],
}

