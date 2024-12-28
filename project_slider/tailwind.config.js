module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/images/th.jpeg')", // Double quotes aur sahi path ka istimaal karein
      },
    },
  },
  plugins: [],
};
