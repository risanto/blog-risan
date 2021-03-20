module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': ['Staatliches', 'ui-sans-serif', 'system-ui'],
      'sans': ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
      'serif': ['Libre Baskerville', 'ui-serif', 'Georgia']
    },
    container: {
      center: true,
      padding: '1rem'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      lg: '0.75rem',
      xl: '1.25rem',
      '2xl': '2.5rem',
      'full': '9999px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'indigo-10': '#fafaff',
      'pink-10': '#fffafa',
    }),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '30%': '30%',
      '50%': '50%',
      '75%': '75%',
      '16': '4rem'
    },
    screens: {
      'below-sm-500': { 'max': '499px' },
      'sm-500': '500px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
