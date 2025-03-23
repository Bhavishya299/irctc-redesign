/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#d0eee4',
          200: '#a3dccb',
          300: '#76c9b2',
          400: '#49b699',
          500: '#1c9c7c',
          600: '#167d63',
          700: '#115e4a',
          800: '#0b3f31',
          900: '#061f19',
        },
        accent: {
          50: '#fdf9e7',
          100: '#fbeec3',
          200: '#f8dd86',
          300: '#f5cc49',
          400: '#f3c22c',
          500: '#dba50f',
          600: '#af840c',
          700: '#836309',
          800: '#574206',
          900: '#2b2103',
        },
      },
    },
  },
  plugins: [],
};