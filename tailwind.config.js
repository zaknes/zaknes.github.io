module.exports = {
  theme: {
    linearGradients: theme => ({
      directions: {
        'r': 'to right'
      },
      colors: {
        brand: [theme('colors.brand.200'), theme('colors.brand.300')]
      },
    }),
    extend: {
      colors: {
        brand: {
          100: '#1732b8',
          200: '#2f4fed',
          300: '#2f9fed'
        },
        selection: {
          bg: 'hsl(230, 75%, 95%)',
          text: 'hsl(230, 84%, 50%)'
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-gradients')()
  ]
}
