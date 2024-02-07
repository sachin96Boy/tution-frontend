import * as dasyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-gray": "#F2F6FF",
        "regal-light": "#FFFFFF",
        "regal-white": "#DCE3F0",
        "regal-red": "#DE5353",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [dasyui],
};
