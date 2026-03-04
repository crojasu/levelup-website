/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy:     '#0D0D3B',
        lime:     '#C8FF00',
        cream:    '#E8E4D4',
        purple:   '#7B6FA0',
        lavender: '#B8B0D8',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
