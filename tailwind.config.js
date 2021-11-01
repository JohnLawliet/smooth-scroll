module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gridTemplateAreas: {
      'imgStart': ['shit2 shit1'],
      'imgStartReverse' : ['shit1 shit2'],
      'imgStartCondensed': ['shit1', 'shit2'],
      'imgStartReverseCondensed': ['shit1 shit1', 'shit2 shit2']
    },
    screens:{
      'xs': '320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        move: 'move 1s ease-in-out infinite',
        card: 'card 0.2s ease-in-out forwards'
      },
      keyframes: {
        move: {
          '0% 100%': {  transform: 'scale(1.5)' }
        },
        card: {
          '0% 100%' : {transform: 'scale(1)'},
          '50%' : {transform: 'scale(1.05)'}
        }
      }
    },
  },
  variants: {
    gridTemplateAreas: ['responsive'],
    scale: ['active']
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
