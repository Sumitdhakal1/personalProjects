/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize:{
        'small':'0.5rem',
        'medium':'1rem',
        'large':'2rem',
        'button-fontSize':'1.2rem'
      
      },
      colors:{
        'custom-input-field-color':'#93B0DB',
        'custom-button-color':'#7CABF1',
        'button-text-hover-color':'#074198',
        'bg-hover-color':'#73A8F8',
        'sidebar':'#343a3f'
      }
    },
  },
  plugins: [],
}

