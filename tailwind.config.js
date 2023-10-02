/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./app/src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['OpenSans'] 
      },
      width: {
        '9/10' : '90%'
      },
      fontSize: {
        'custom-2xl' : '1.65rem',
        'custom-lg' : '1.12rem',
        'custom-4xl' : '2.75rem'
      },
      borderWidth : {
        '3' : '3px'
      }
    },
  },
  plugins: [],
}

