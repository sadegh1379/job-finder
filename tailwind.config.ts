import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom background and foreground colors
        pink: '#ffeeea',
        gray: '#f8fafc',
        blueGray: '#f4fafc',
        red: '#ee786b',
        // These can be used as text or border colors
        redText: '#ee786b',
        blue: '#32a2bb',
        grayText: '#aeb6bf',
      },
      backgroundColor: {
        // Custom background colors (you can use these with bg-[color])
        pink: '#ffeeea',
        gray: '#f8fafc',
        blueGray: '#f4fafc',
        red: '#ee786b',
      },
    },
  },
  plugins: [],
} satisfies Config;
