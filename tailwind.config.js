
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#773CBA',
          hover: '#62319A',
          light: '#F4EFFF',
        },
        neutral: {
          900: '#1a1a1a',
          600: '#666666',
          200: '#e5e5e5',
          50: '#fafafa',
        }
      },
      fontFamily: {
        sans: ['"Eras Demi ITC"', 'sans-serif'],
        serif: ['"Eras Demi ITC"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      maxWidth: {
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
}
