/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':"#ffff",
      'blue': '#0057E5',
      'brown': '#1E1919',
      'lightblue': 'rgb(57,132,255)',
      'darkblue': 'rgb(0,97,254)',
      'bluelight': '#4D90FF',
      'grey': '#F7F5F2',
      'light': '#2B2929',
      'black': '#000000',
      'red': '#9B0032',
    },
    fontFamily: {
      sans: ['lato', 'sans-serif'],

    },
    extend: {
      
    },
  },
  plugins: [],
}

