/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#f6f3ec',
          light: '#fbf9f5',
          dark: '#ebe6da',
        },
        ink: {
          DEFAULT: '#121211',
          muted: '#4a4843',
          faint: '#78746c',
          night: '#0e0e0d',
          nightCard: '#151513',
          chalk: '#f2efe9',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
