/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html",
  "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants:{
    extend:{
      backgroundColor: ["active" ,"focus"],
    },
  },
  plugins: [],
};

