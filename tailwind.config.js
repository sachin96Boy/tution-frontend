import * as dasyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#3B5079",
        "prime-alt": "#7383A1",
        second: "#f2f6ff",
        "second-alt": "#FFFFFF",
        tertiary: "#368DF3",
        "tertiary-alt": "#DE5353",
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [dasyui],
};
