/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translateX(0)",
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateX(20%)",
            transform: "translateY(20%)"
          },
          "100%": {
            transform: "translateX(0)",
            transform: "translateY(0)"
          }
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)"
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)"
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)"
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)"
          }
        },
        flicker: {
          "0%": { opacity: "0.8" },
          "10%": { opacity: "0.2" },
          "20%": { opacity: "0.9" },
          "30%": { opacity: "0.4" },
          "50%": { opacity: "1" },
          "70%": { opacity: "0.3" },
          "90%": { opacity: "0.7" },
          "100%": { opacity: "0.5" }
        }
      },
      animation: {
        float: "float 3s infinite ease-in-out",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        flicker: "flicker 3s infinite"
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.25vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.9rem + 0.3vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.5vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "3.5rem"
      },
      colors: {
        sky_100: "#ABE1FF",
        sky_300: "#18AAFF",
        blue_300: "#385DDF",
        blue_neon: "#DDE2FF",
        blue_dark: "#20225f",
        blue_rgba: "rgba(0, 26, 255, 0.17)",
        blue_border_rgba: `rgba(0, 26, 255, 0.17)`,
        purple_main: "#E149A9",
        purple_dark: "#0D0A22",
        purple_300: "#9EA8FF",
        purple_hover: "#3b3561",
        purple_500: "#4F38DF",
        purple_shadow_blur: "#6F6795",
        pink_700: "#B438DF",
        pink_400: "#FF8F8F",
        pink_300: "#DF389C",
        pink_200: "#D936BF",
        pink_100: "#FFABCE",
        orange_300: "#FFC985",
        orange_100: "#FFEDCC",
        turquoise_300: "#30D7E1",
        purple_gradient_1: "#340B67",
        purple_gradient_2: "#0C091A",
        blue_purple: "#002AFF",
        beige: "#D9D9D9",
        white: "#FFF",
        purple_card: "#1E2D79",
        cyan: "#46C8E5",
        mint: "#51FFCE"
      },
      textColor: {
        purple_main: "#EB6EFF",
        purple_main_hover: "#b49fcc"
      },
      backgroundColor: {
        body_bg: "#FFFAF1"
      },
      fontFamily: {
        audiowide: ["var(--font-audiowide)", "sans-serif"],
        bruno: ["Bruno Ace", "sans-serif"],
        rubik: ["Rubik", "sans-serif"]
      },
      borderWidth: {
        5: "5px"
      },
      boxShadow: {
        glow: "0 0 8px rgba(70,200,229,0.6)"
      }
    }
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")]
};
