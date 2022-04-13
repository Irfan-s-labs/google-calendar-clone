module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: "Open Sans"
      },
      gridTamplateColumns:{
        "1/5": "1fr 5fr"
      }
    },
  },
  plugins: ['@tailwindcss/forms'],
}