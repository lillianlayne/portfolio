/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {
      colors: {
        lightblue: "#A0BCE4"
      },
      fontFamily: {
        sans: "acumin-pro",
        serif: "swear-display",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "horizontal-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "fill-animation": {
          from: {transform: "scale(0%)"}, 
          to: {transform: "scale(300%)"} 
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "horizontal-scroll": "horizontal-scroll 45s linear infinite",
        "fill-animation": "fill-animation 2s ease-in"
      },
    },
  },
  plugins: [
  ],
};
