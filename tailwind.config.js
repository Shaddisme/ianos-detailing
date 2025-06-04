/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define which files Tailwind should scan for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: '#f8f9fa',
        secondary: '#ced4da',
        accent: '#007bff',
        text: '#343a40',
        'text-secondary': '#6c757d',
      },
      // Custom font families
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 