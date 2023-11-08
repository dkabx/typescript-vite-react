export default {
  purge: {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    // important: '#root',
    options: {
      whitelist: [
        'bg-transparent',
        'text-black',
        'text-white',
        'border-black',
        'block',
      ],
      whitelistPatterns: [
        /primary/,
        /secondary/,
        /tertiary/,
        /highlight/,
        /muted/,
        /neutral/,
        /w-1\/[1-6]/,
      ],
    },
  },
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    screens: {
      maxxs: { max: '320px' },
      maxxsm: { max: '420px' },
      maxxl: { max: '696px' },
      maxll: { max: '740px' },
      maxxll: { max: '1024px' },
      xs: '320px',
      xsm: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      max: '1440px',
    },
    extend: {
      textColor: {
        primary: 'black',
        secondary: 'black',
        red: '#D72C06',
        gray: '#7d7d7d',
        black: '#000000',
      },
      backgroundColor: {
        primary: '#0C7CF3',
        secondary: '#C20CF3',
        secondaryLight: '#3DB1F9',
        blueLight: '#d3ecef94',
        red: '#D72C06',
        redLight: 'rgba(221, 150, 150, 1)',
        gray: '#7d7d7d',
        white: '#FFFFFF',
        black: '#000000',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h2: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h3: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h4: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h5: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h6: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
          },
        },
        sm: {
          css: {
            h1: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h2: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h3: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h4: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h5: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h6: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h2: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h3: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h4: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h5: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
            h6: {
              fontFamily: ['Museo Sans Cyrl Medium', 'sans-serif'],
            },
          },
        },
      },
      boxShadow: {
        card: '0px 3px 14px rgba(97, 97, 97, 0.2)',
        'location-card': '0px 0px 20px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        heading: ['Museo Sans Cyrl Medium', 'sans-serif'],
        body: ['Museo Sans Cyrl Normal', 'sans-serif'],
      },
      borderColor: {
        primary: '#0C7CF3',
        secondary: '#C20CF3',
        red: '#D72C06',
        gray: '#7d7d7d',
      },
      padding: {
        7: '26px',
        4: '4px',
      },
      width: {
        '11/20': '55%',
        60: '60px',
        50: '50px',
        550: '550px',
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
};
