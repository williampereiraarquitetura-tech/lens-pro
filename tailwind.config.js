/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF5E0E',    // O seu laranja LENS
        secondary: '#011DFC',  // O seu azul LENS
        dark: '#0C0C0C',       // O seu preto da sidebar
        surface: '#F5F5F3',    // O seu fundo
      },
    },
  },
  plugins:[],
}