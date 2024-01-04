/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      translate: {
        'full-plus-8': 'calc(100% + 2rem)',
      },
      screens: {
        'xs': '400px'
      },
      colors: {
        'lightRed': '#ff0b13',
        'lightYellow': '#ffcb05',
        'lightBlue': '#2a75bb'
      },
      transitionDuration: {
        DEFAULT: '300ms'
      }
    },
  },
  plugins: [],
}

