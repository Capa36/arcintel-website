/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          dark: '#1B3B35',    // Darkest green
          forest: '#2D5248',  // Forest green
          sage: '#4E8576',    // Sage green
          mint: '#7AB5A0',    // Mint green
          light: '#B8E2D4'    // Lightest mint
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}