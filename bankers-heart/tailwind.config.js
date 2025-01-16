/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        peach: "#FFDDB8",
        ivory: "#FFF4E8",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270.06deg, #FFDDB8 0.8%, #FFF4E8 97.64%)",
      },
    },
  },
  plugins: [],
};
