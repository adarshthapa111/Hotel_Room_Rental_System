/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlue: 'gradient-to-r from-blue-500 to-purple-500',
      },
      fontFamily: {
        'caas': ['Cassandra', 'sans-serif'],
        'playfair': ['Playfair Display', 'erif'],
        'ontserrat': ['Montserrat', 'ans-serif'],
        'great-vibes': ['Great Vibes', 'display'],
      },
    },
  },
  plugins: [],
};
