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
        mono: `"Ubuntu Mono"`,
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
        fadeInRotation: 'rotateY 3s ease-in-out forwards',
        wiggleY: 'wiggleY 1s ease-in-out infinite',
        wiggleYQuick: 'wiggleY 1s ease-in-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-in forwards',
        fadeInRight: 'fadeInRight 1s ease-in forwards',
        fadeInTop: 'fadeInTop 1s ease-in forwards',
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
        rotateY: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        wiggleY: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(20deg)' },
        },
        fadeInLeft: {
          '0%' : {
            opacity: 0,
            transform: 'translateX(40px)'
          },
          '100%' : {
            opacity: 1,
            transform: 'translateX(0px)'
          }
        },
        fadeInRight: {
          '0%' : {
            opacity: 0,
            transform: 'translateX(-10px)'
          },
          '100%' : {
            opacity: 1,
            transform: 'translateX(0px)'
          }
        },
        fadeInTop: {
          '0%' : {
            opacity: 0,
            transform: 'translateY(-40px)'
          },
          '100%' : {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        }
      },
    },
  },
};
