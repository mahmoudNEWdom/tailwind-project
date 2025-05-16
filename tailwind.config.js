/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#67dbda",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        moveRight: "moveRight 1.5s ease-in-out infinite",
      },
      screens: {
        sm: "576px"
        , // => @media (min-width: 576px) { ... }
        md: "768px"
        , // => @media (min-width: 768px) { ... }
        lg: "992px"
        , // => @media (min-width: 992px) { ... }
        xl: "1200px"
        , // => @media (min-width: 1200px) { ... }  
        "2xl": "1400px"
        , // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
}

