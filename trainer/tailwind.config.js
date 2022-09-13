/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '36px',
      '5xl': '56px',
    },
    extend: {
      width: {
        mobile: '390px',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: '#F1C40E',
        secondary: '#9E9E9E',
        ternary: '#D4D4D4',
        additional: '#FBFBFB',
      },
      padding: {
        page: '15px',
      },
    },
  },
  plugins: [],
}
