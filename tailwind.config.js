/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        heading: '#1a1a1a',
        body: '#4a4a4a',
        link: '#2563eb',
        'link-hover': '#1d4ed8',
        accent: '#2563eb',
      },
      fontFamily: {
        'inter': ['Inter'],
      },
    },
  },
  plugins: [],
};
