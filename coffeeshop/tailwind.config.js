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
        text: "#4F5665",
        pale: "#EFEEEE",
        xpale: "#BABABA"
      },
      backgroundImage: {
        auth: "url('../src/assets/images/auth-image.jpg')",
        jumbotron: "url('../src/assets/images/jumbotron.jpg')",
        payment: "url('../src/assets/images/payment-deliv-main-bg.webp')",
        history: "url('../src/assets/images/history-bg.webp')"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}