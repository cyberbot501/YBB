/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        inter:  ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        climate: ["Climate Crisis", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // other plugins
  ],
}

