import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    primary: {
      main: '#0C7CF3', // Orange
      dark: '#0C7CF3', // Light Orange 2
      light: '#0C7CF3', // Light Black
      contrastText: 'rgba(255, 255, 255, 1)', // white opacity
    },
    secondary: {
      main: '#C20CF3', // Light Orange
      dark: '#C20CF3', // Light Orange 2
      light: '#C20CF3', // Light Orange 3
      contrastText: 'FBF6D9',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    // error: {
    //   main: '#FF0000',
    //   dark: '#FF5151',
    //   light: '#FFF1F1',
    //   contrastText: '#FFFFFF',
    // },
    // warning: {
    //   main: '#FFA726',
    //   dark: '#F57C00',
    //   light: '#FFB74D',
    //   contrastText: '#FFFFFF',
    // },
    // info: {
    //   main: '#29B6F6',
    //   dark: '#0288D1',
    //   light: '#4FC3F7',
    //   contrastText: '#FFFFFF',
    // },
    // success: {
    //   main: '#66BB6A',
    //   dark: '#388E3C',
    //   light: '#81C784',
    //   contrastText: '#FFFFFF',
    // },
    // text: {
    //   primary: '#121212',
    //   secondary: '#404852',
    //   disabled: '#979797',
    // },
    grey: {
      50: '#F0EEEE',
      100: '#979797',
      200: '#00000080',
      // 300: '#464E5F',
      // 400: '#F4F4F4',
      // 500: '#262A41',
      // 600: '#FFF4EE',
      // 700: '#F3F6F9',
      // 800: '#818E9A',
      // 900: '#16192C',
      // A100: '#0A6DF7',
      // A200: '#EC4B46',
      // A400: '#9FA3A8',
      // A700: '#FFF8B5',
    },
    background: {
      default: '#FFFFFF',
      // paper: '#EFF3F6',
      paper: '#FFFFFF',
    },
  },
  shadows: [
    'none',
    '0px 0px 2px 2px rgba(149, 149, 150, 0.25)',
    '1px 0px 14px 14px rgba(35, 35, 35, 0.25)',
    '0px 7px 14px 7px rgba(233, 227, 227, 0.25)',
    '0px 5px 19px 2px rgba(0, 0, 0, 0.25)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  // components: {
  //     MuiButton: {
  //         styleOverrides: {
  //             root: {
  //                 fontFamily: '"Inter", sans-serif',
  //                 ':focus': { outline: 'none' }
  //             }
  //         }
  //     },
  //     MuiCard: {
  //         styleOverrides: {
  //             root: {
  //                 fontFamily: '"Inter", sans-serif',
  //             }
  //         }
  //     },
  //     MuiTypography: {
  //         styleOverrides: {
  //             root: {
  //                 fontFamily: '"Inter", sans-serif',
  //             }
  //         }
  //     },
  // }
});
