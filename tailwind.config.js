/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/images/Background')",
        web2: "url('/images/backdrop11.jpeg')",
        web3: "url('/images/backdrop21.jpeg')",
      },
      fontFamily: {
        space: ["Space Grotesk", "serif"],
      },
    },
  },
  plugins: [],
};
