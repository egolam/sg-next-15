/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#f2c400",
        "ficsit-primary": "#fa9549",
        "ficsit-secondary": "#5F668C",
        "bg-main": "#111416",
        "play-btn-green": "#00DD00",
        "map-bg" : "#4c7179"
      },
    },
  },
  plugins: [],
};
