/** @type {import('tailwindcss').Config} */
export default {
  important: true, // Optional, adds !important to all utilities
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,scss}",
    "./node_modules/@shadcn/ui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
