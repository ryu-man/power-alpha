/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#15E910",
        secondary: "#1E1E1E"
      }
    },
  },
  plugins: [],
}

