/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',  // 512px
      },
      height: {
        '128': '32rem',  // 512px
      },
      padding: {
        '36': '9rem',    // 144px
      },

      // Custom animations
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-6px)' },
          '40%': { transform: 'translateX(6px)' },
          '60%': { transform: 'translateX(-6px)' },
          '80%': { transform: 'translateX(6px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        shakeFade: 'fadeIn 0.3s ease-out, shake 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
}
