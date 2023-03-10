/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
      colors: {
        primary: "#FFBA33",
        secondary: "#6A4029",
        title: "#0B132A",
        text: "#4F5665"
      },
      backgroundImage: {
        auth: "url('../src/assets/images/auth-image.jpg')"
      }
    },
  },
  plugins: [],
}