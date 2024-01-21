/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.65rem',
        '3xs': '0.6rem',
      },
      strokeWidth: {
        s: '1px',
      },
      backgroundImage: {
        heroImage: "url('/images/camp-01.JPG')",
        kids: "url('/images/movies/joker.jpg')",
        skill: "url('/images/movies/alien.jpg')",
        colofulLogo: "url('/logo/axewhy-colorful-logo.png')",
        loginImage:
          "url('https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')",
      },

      fontFamily: {
        // nunito: ["Nunito Sans", "Inter", "system-ui", "sans-serif"],
        oracle: `Oracle, "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Noto Sans Regular", "Helvetica Neue", Helvetica, Arial, sans-serif`,
        sans: `Open Sans, "Noto Sans Regular", "Helvetica Neue", Helvetica, Arial, sans-serif`,
        circular: `Circular, -apple-system, "system-ui", Roboto, "Helvetica Neue", sans-serif;`,
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    // require("@tailwindcss/line-clamp"),
    require('tw-elements/dist/plugin'),
  ],
};
