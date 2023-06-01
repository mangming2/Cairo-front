/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        desert: "url('../public/desert.jpg')",
        desert2: "url('../public/desert2.jpg')",
        desert3: "url('../public/desert3.jpg')",
        wave: "linear-gradient(45deg, #00b4db 0%, #0083b0 100%)",
      },
      fonts: {},
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        down: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fill: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        water: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(45deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        down: "down 1s ease-in-out",
        fill: "fill 3s ease-in-out infinite",
        wave: "wave 1s infinite",
      },
    },
  },
  plugins: [],
};
