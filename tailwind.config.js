/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-black-1": "#13171E",
        "custom-black-2": "#0C0F13",
      },
      backgroundImage: {
        image1: "url('./Images/BlueKirby1.png')",

        // Add as many images as you have
      },
      colors: {
        white: "#ffffff",
        blue: "#007dff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
