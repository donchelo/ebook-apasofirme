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
          sand: '#F5F2EB',
          stone: '#E6E2DD',
          dark: '#1C1917',
          olive: '#4A5D4F',
          blue: '#1E293B',
          // Mapeos de compatibilidad si es necesario, o limpiar después
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
