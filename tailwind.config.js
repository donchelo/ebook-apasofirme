/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          arena: "#F2EFE9",
          beige: "#E8E2D6",
          gray: {
            warm: "#4A4947",
            light: "#A09E9B",
          },
          olive: "#556B2F",
          blue: "#1A2B3C",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '1.1' }],
        'h1': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.1' }],
        'h2': ['clamp(2rem, 6vw, 3.5rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2' }],
      }
    },
  },
  plugins: [],
}
