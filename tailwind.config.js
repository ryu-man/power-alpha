/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', '100%'],
      sm: ['0.875rem', '104%'],
      base: ['1rem', '106%'],
      lg: ['1.25rem', '108%'],
      xl: ['1.5rem', '110%'],
      '2xl': ['1.75rem', "112%"],
      '3xl': ['2rem', "114%"],
      '4xl': ['2.25rem', "116%"],
      '5xl': ['2.5rem', "118%"],
    },
    extend: {
      colors: {
        primary: "#15E910",
        secondary: "#1E1E1E"
      }
    },
  },
  plugins: [],
}

