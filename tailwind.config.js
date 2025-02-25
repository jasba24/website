// Dependencies
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig }
 **/
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/{components,pages}/**/*.{ts,tsx}'],
    safelist: ['max-w-md', 'max-w-lg'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00C389',
        secondary: {
          50: '#F3FAFD',
          100: '#DDF2FA',
          200: '#B0E0F4',
          300: '#83CEEE',
          400: '#56BDE8',
          500: '#29ABE2',
          600: '#1A8DBE',
          700: '#146C91',
          800: '#0E4B64',
          900: '#082937',
          DEFAULT: '#29ABE2',
          darker: '#071D49',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        ...defaultTheme.screens,
        xs: '475px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#838383',
            a: {
              color: '#071D49',
              transition: theme('transitionProperty.all'),
              transitionDuration: theme('transitionDuration.200'),
              '&:hover': {
                color: '#071D49',
                opacity: theme('opacity.80'),
              },
              code: { color: theme('colors.blue.400') },
            },
            code: {
              backgroundColor: '#282a36',
              color: '#f8f8f2',
              borderRadius: theme('borderRadius.lg'),
              padding: `${defaultTheme.spacing[1]} ${defaultTheme.spacing[0.5]}`,
              fontWeight: theme('fontWeight.normal'),
            },
            'h2,h3,h4,h5,h6': {
              color: '#071D49',
              'scroll-margin-top': defaultTheme.spacing[32],
              position: 'relative',
              paddingLeft: defaultTheme.spacing[6],
              marginLeft: `-${defaultTheme.spacing[6]}`,
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.300'),
              color: theme('colors.gray.400'),
              'p:first-of-type::before': false,
              'p:last-of-type::after': false,
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.300') },
                ul: {
                  marginTop: `0 !important`,
                },
              },
              ul: {
                '&:first-child': {
                  marginTop: `0 !important`,
                },
                li: {
                  '&:first-child': {
                    marginTop: `8px !important`,
                  },
                },
              },
            },
            thead: {
              color: theme('colors.gray.700'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            pre: {
              pre: {
                margin: 0,
              },
            },
          },
        },
        dark: {
          css: {
            a: {
              color: '#29ABE2',
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.500'),
              color: theme('colors.gray.400'),
            },
            code: {
              backgroundColor: '#1d1f21',
              color: '#c5c8c6',
            },
            color: '#838383',
            'h2,h3,h4,h5,h6': {
              color: '#29ABE2',
            },
            ol: {
              li: {
                '&::before': { color: '#fff', fontWeight: 700 },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
          },
        },
        lg: {
          css: {
            '.graphcms-image-wrapper img': {
              margin: 0,
            },
            '.giphy-gif-img': {
              margin: 0,
            },
            pre: {
              borderRadius: '0.5rem',
              padding: 0,
              pre: {
                paddingTop: '1em',
                paddingRight: '1.5em',
                paddingBottom: '1em',
                paddingLeft: '1.5em',
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      }
      addUtilities(newUtilities)
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
