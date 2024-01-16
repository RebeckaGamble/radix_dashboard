/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'big-screen': '1365px',
        // => @media (min-width: 1365px) { ... }

      },
      colors: {
        border: "rgb(228, 228, 231)",
        black: "rgb(9, 9, 11)",
        white: "#fff",
      },
      fontFamily: {
        sans: ["'Encode Sans Semi Condensed'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}