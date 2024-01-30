/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {
        '200': '40rem',
      },

      margin: {
        '5px': '5px',
      },
      padding: {
        '13px': '13px',
      },
      colors: {
        'blue': '#3B5079 ',
        'regal-blue': '#7383A1',
        'bg-red': 'background: #DE5353',
        'bg-white': 'bg:background: #FDFDFD',
      }
    },

  },
  daisyui: {
    themes: ["light"],
  },
 
 plugins: [require("daisyui")],
}

