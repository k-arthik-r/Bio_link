/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bodya: '#121212',
        bodyb: '#292929',
      },

            
      screens: {
        'sm': {'min': '0px', 'max': '312px'},
        'md': {'min': '313px', 'max': '672px'},
        'lg': {'min': '673px', 'max': '2700px'},
      },
    },
  },
  plugins: [],
}

