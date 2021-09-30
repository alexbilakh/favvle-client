module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '3.5xl': '1.75rem'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'helvetica': ['Helvetica']
      },
      fontSize: {
        '15px': ['15px', '21px'],
        '16px': ['16px', '22px'],
        '19px': ['19px', '23px'],
        '20px': ['20px', '28px'],
        '22px': ['22px', '30px'],
        '26px': ['26px', '32px'],
      },
      opacity: {
        '55': '.55'
      },
      textColor: {
        'default-color': '#154A4E'
      },
      width: {
        '4.5': '1.125rem',
        '75': '18.75rem',
      },
      maxWidth: {
        '110': '27.5rem'
      },
      height: {
        '7.5': '1.875rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
