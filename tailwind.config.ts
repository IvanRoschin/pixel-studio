import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
     screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
    },

    fontFamily: {
      tacticsans: ['var(--font-tacticsans)'],
      tacticansBld: ['var(--font-tacticsans-bold)'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        primaryBackground: 'rgb(var(--color-primaryBackground) / <alpha-value>)',
        secondaryBackground: 'rgb(var(--color-secondaryBackground) / <alpha-value>)',

        primaryTextColor: 'rgb(var(--color-primaryTextColor) / <alpha-value>)',
        secondaryTextColor: 'rgb(var(--color-secondaryTextColor) / <alpha-value>)',
        thirdTextColor: 'rgb(var(--color-thirdTextColor) / <alpha-value>)',


        iconColor: 'rgb(var(--color-iconColor) / <alpha-value>)',
        sectionTitleColor: 'rgb(var(--color-sectionTitleColor) / <alpha-value>)',

        primaryAccentColor: 'rgb(var(--color-primaryAccentColor) / <alpha-value>)',
        secondaryAccentColor: 'rgb(var(--color-secondaryAccentColor) / <alpha-value>)',

        primaryScrollbarTrack: 'rgb(var(--color-primaryScrollbarTrack) / <alpha-value>)',
        primaryScrollbarThumb: 'rgb(var(--color-primaryScrollbarThumb) / <alpha-value>)',
      },
      animation: {
        'fade-in': 'fade-in 1s',
        'fade-out': 'fade-out 1s',
        'icon-transition': 'transition duration-3000 ease-in-out transform'
       }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
