/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        "primary-color": "#36517E",
        "secondary-color": "#45B3E3",
        "tertiary-color": "#F5F6F8",
      }
     
    },
    transformOrigin: {
      'bottom-left': '0 100%',
    },
 
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container:{
      center:true,
      padding: "1rem",
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    fontFamily:{
       nunito: ['Nunito,  sans-serif']
    },
  },
  plugins: [],
}

