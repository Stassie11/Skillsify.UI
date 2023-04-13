/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      whitecustom: '#F0F7FF',
      lightbluecustom: '#DBEAFF',
      lightgraycustom: '#E6ECF9',
      graycustom: '#99BBDD',
      darkgraycustom: '#7D9BBA',
      bluecustom: '#23A6F0',
      pinkcustom: '#BF50A7',
    },
    fontFamily: {
     oswald: "'Oswald', sans-serif",
     poppins: "'Poppins', sans-serif",
     playfair: "'Playfair Display', serif",
     montserrat: "'Montserrat', sans-serif",
    }
  },
  plugins: [],
}

