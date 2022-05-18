module.exports = {
  mode: "jit",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/assets/bg.jpg')",
      },
      colors: {
        brand: {
          blue: "#1E92C0",
          gray: "#EFEFEF",
          white: "#FFFFFF",
          black: "#121212",
        },
      },
    },
  },
  plugins: [],
};
