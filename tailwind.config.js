/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.65rem",
        "3xs": "0.6rem",
      },
      strokeWidth: {
        s: "1px",
      },
      backgroundImage: {
        kids: "url('/images/movies/joker.jpg')",
        skill: "url('/images/movies/alien.jpg')",
        colofulLogo: "url('/logo/axewhy-colorful-logo.png')",
        loginImage:
          "url('https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
