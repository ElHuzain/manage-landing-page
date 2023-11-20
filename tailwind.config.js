/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "primary-c": "#fff",
        "primary-1": "hsl(12, 88%, 59%)",
        "primary-2": "hsl(228, 39%, 23%)",
        "secondary-1": "hsl(227, 12%, 61%)",
        "secondary-2": "hsl(233, 12%, 13%)",
        "secondary-3": "hsl(13, 100%, 96%)",
        "secondary-4": "hsl(0, 0%, 98%);",
      },
    },
  },
  plugins: [],
}

