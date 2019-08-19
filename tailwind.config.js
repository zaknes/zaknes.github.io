module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        brand: {
          100: '#1732b8',
          200: '#2f4fed',
          300: '#2f9fed',
        },
        selection: {
          bg: 'hsl(230, 75%, 95%)',
          text: 'hsl(230, 84%, 50%)',
        },
      },
    },
    linearGradients: theme => ({
      directions: {
        'r': 'to right',
      },
      colors: {
        brand: [theme('colors.brand.200'), theme('colors.brand.300')],
      },
    }),
  },
  plugins: [
    require('tailwindcss-gradients')(),
  ],
}
