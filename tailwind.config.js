/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xxl': '1680px'
      },
    },
    plugins: [],
    corePlugins: {
      scrollBehavior: true, // Enabling core plugin for scroll behavior
    },
  }
}