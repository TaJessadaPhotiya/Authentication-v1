/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-right": {
          "0%": {
            transform: "translateX(1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-out-right": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(1000px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-out-right": "slide-out-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
