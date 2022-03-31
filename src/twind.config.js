// @ts-nocheck

export default {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        montserrat: `"Montserrat" `,
      },
      colors: {
        transparent: 'transparent',
        'dark-mode': '#121212',
        'button-pink': '#FF006A',
        'web-gray': '#585858',
        'custom-cyan': '#22d3ee',
      },
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeOut: 'fadeOut 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
};
