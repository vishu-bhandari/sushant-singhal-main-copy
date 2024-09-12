
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  
  theme: {
    extend: {
      colors:{
        "primary":"#0A192F",
        "secondary":"#F97316",
        "tertiary":"#54D6BB"

      },
      boxShadow: {
        'custom-orange': '0 8px 12px rgba(255, 159, 64, 0.8), 0 3px 6px rgba(255, 159, 64, 0.6)',
        'custom-teal': '0 8px 12px rgba(64, 224, 208, 0.8), 0 3px 6px rgba(64, 224, 208, 0.6)',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
           
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
            borderRadius:'50%'
          
          },
        },
        linkglow: {
          '0%, 100%': { boxShadow: '0 0 50px rgba(255, 165, 0, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 165, 0, 1)' },
        },
        tealglow: {
          '0%, 100%': { boxShadow: '0 0 50px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(0, 255, 255, 1)' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite alternate',
        linkglow: 'linkglow 1.5s infinite alternate',
        tealglow:'tealglow 1.5s infinite alternate',
      },
    },
   
  },
  plugins: [
    
    require('tailwindcss-patterns'),
    flowbite.plugin(),
  ],
}
