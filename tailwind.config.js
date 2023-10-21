/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'main-red': '#eb7260',
        'main-black': '#354458',
      },
      width: {
        container: '1300px',
      },
      height: {
        header: '80px',
      },
    },
  },
  plugins: [],
};
