/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      width: {
        '85%': '85%',
        '95%': '95%',
        '99%': '99%',
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      minHeight: {
        '80vh': '80vh',
      },
      maxHeight: {
        '90vh': '90vh',
      },
    },
  },
  plugins: [],
}
