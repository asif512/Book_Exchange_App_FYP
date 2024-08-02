/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
    },
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
};
