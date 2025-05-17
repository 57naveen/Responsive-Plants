/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
      },
      screens: {
        sm: "340px",
        md: "540px",
        lg: "768px",
        xl: "1180px",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(0.8)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.05)" },
        },
        bounceY: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(-1rem)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      heartbeat: {
        "0%, 100%": { transform: "scale(1)" },
        "14%": { transform: "scale(1.3)" },
        "28%": { transform: "scale(1)" },
        "42%": { transform: "scale(1.3)" },
        "70%": { transform: "scale(1)" },
      },
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
        "75%": { transform: "translateX(-5px)" },
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 10s linear infinite",
        pulsing: "pulse 2s ease-in-out infinite",
        bouncing: "bounceY 1s infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        shake: 'shake 0.5s ease-in-out infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          md: "32px",
        },
      },
    },
  },
  plugins: [],
};
