/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        whiteSand : '#E9E3E7',
        greySand : '#908C8A',
        greenOcean : '#49716E',
        deepGreenOcean : '#234040',
        darkOcean: '#0E1C1C'
      },
    },
  },
  plugins: [],
};


