const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tama: {
          green: "#7FBFB0",
          orange: "#C1684D",
          teal: "#008080",
    
          // ✨ NEW muted scheme
          sage: "#A9C7BE",        // softer green
          clay: "#D9A38F",        // soft orange / terracotta
          cream: "#F7F4EF",       // warm background
          sand: "#EFE7DD",        // section background
          charcoal: "#2F2F2F",    // text anchor
        },
      },
      fontFamily: {
        sans: ["var(--font-arimo-sans)", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
        decorative: ["'Playfair Display'", "serif"],
        body: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro"],
  },
});