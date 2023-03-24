import { createTheme } from 'baseui';

// Create a custom theme object that defines colors, typography, spacing, and breakpoints. 
// In Base Web, typography is defined by a scale of font sizes that range from font100 (smallest) 
// to font1000 (largest). Each font size in the scale represents a different level of importance or 
// hierarchy, and can be applied to different elements in your UI as needed.

const myTheme = createTheme({
  // Define colors
  colors: {
    primary: '#0070f3',
    secondary: '#ff8700',
    tertiary: '#1abc9c',
    accent: '#f81ce5',
    background: '#f9f9f9',
    foreground: '#333333',
  },

  // Define typography
  typography: {
    font100: {
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '16px',
    },
    font200: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    font300: {
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    font400: {
      fontSize: '18px',
      fontWeight: 'normal',
      lineHeight: '28px',
    },
    font500: {
      fontSize: '20px',
      fontWeight: 'normal',
      lineHeight: '32px',
    },
    font600: {
      fontSize: '24px',
      fontWeight: 'normal',
      lineHeight: '36px',
    },
    font700: {
      fontSize: '28px',
      fontWeight: 'normal',
      lineHeight: '40px',
    },
    font800: {
      fontSize: '32px',
      fontWeight: 'normal',
      lineHeight: '44px',
    },
    font900: {
      fontSize: '40px',
      fontWeight: 'normal',
      lineHeight: '56px',
    },
  },

  // Define spacing
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },

  // Define breakpoints
  breakpoints: {
    small: '480px',
    medium: '768px',
    large: '1200px',
  },
});

export default myTheme;