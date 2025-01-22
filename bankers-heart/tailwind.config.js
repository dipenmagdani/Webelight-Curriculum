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
        dmsans: ["DM sans", "sans-serif"],
      },
      colors: {
        peach: "#FFDDB8",
        ivory: "#FFF4E8",
        header: "#111928",
        para: "#4B5563",
        button: "#CD0001",
        header2: "#1F2A37",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270.06deg, #FFDDB8 0.8%, #FFF4E8 97.64%)",
      },
      gridTemplateColumns: {
        xl: ["412px 1px 294px 1px 412px"],
        lg: ["412px 1px 294px 1px"],
        md: ["390px 1px 294px"],
        sm: ["330px 274px"],
      },
      gridTemplateRows: {
        lg: ["463px 204px"],
        md: ["463px 463px"],
        sm: ["390px 330px"],
      },
    },
  },
  plugins: [],
};
