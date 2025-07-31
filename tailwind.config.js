/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './assets/js/**/*.js',
    './components/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // Earth tone palette
        'sand': '#E6D2B5',
        'clay': '#C1A98C',
        'moss': '#8A9A5B',
        'forest': '#3B5249',
        'ocean': '#4A6D8C',
        'sunset': '#D98F6A',
        'coral': '#E76F51',
        'midnight': '#1F2937'
      },
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia'],
        'display': ['Playfair Display', 'serif']
      },
      height: {
        'screen-90': '90vh',
      },
      maxWidth: {
        'readable': '65ch',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.ocean'),
              '&:hover': {
                color: theme('colors.forest'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.forest'),
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.forest'),
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              color: theme('colors.forest'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
};