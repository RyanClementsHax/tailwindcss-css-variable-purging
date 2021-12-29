const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        used: "rgb(var(--colors-used))",
        unused: "rgb(var(--colors-unused))",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--colors-used": "0, 0, 255",
          "--colors-unused": "255, 0, 0",
        },
      });
    }),
  ],
};
