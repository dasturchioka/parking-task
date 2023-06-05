/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Noto Sans", "sans-serif"],
      },
      colors: {
        gBg: {
          DEFAULT: "#F2F2F2",
        },
        dark: {
          DEFAULT: "#000",
          lighter: "#616161",
        },
        gray: {
          DEFAULT: "#D0D0D0",
          lightest: "#F6F6F6",
        },
        blue: {
          DEFAULT: "#0085FF"
        }
      },
    },
  },
  plugins: [],
};
