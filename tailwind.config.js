/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pacifico:["Pacifico", "handwriting"], 
      },
      colors:{
        primaryColor: '#e54728',
        secondaryColor:'#f95428',
        textColor:'#666666',
        bgColor : '#f4f7fa'
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

