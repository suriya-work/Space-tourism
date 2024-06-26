import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
        'white-5': 'rgba(255, 255, 255, 0.14)',
        'white-6': 'rgba(255, 255, 255, 0.10)',
      },
      fontFamily: {
        primary: ['var(--barlow-font)'],
        secondary: ['var(--bellefair-font)'],
      },
    },
  },
  plugins: [],
}
export default config
