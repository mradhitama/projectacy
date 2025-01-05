/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        whiteSand : '#E9E3E7',
        greySand : '#908C8A',
        greenOcean : '#49716E',
        deepGreenOcean : '#1A3636',
        deepOcean: '#292929',
        darkOcean: '#222222',
        darkness: '#191919'
      },
    },
  },
  plugins: [],
};


