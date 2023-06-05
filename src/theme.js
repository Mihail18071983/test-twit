const shadowColor = '235deg 32% 13%';

const theme = {
  colors: {
    white: '#fff',
    text: '#27374D',
    background: '#9db7cb',
    primary: '#5736A3',
    secondary: '#EBD8FF',
    accent: '#5CD3A8',
    muted: '#9DB2BF',
    alert: '#FF1E1E',
  },

  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '24px',
    xxl: '32px',
  },

  fontWeights: {
    thin: 100,
    light: 200,
    regular: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],

  mediaBreakpoints: {
    mobile: { media: '(max-width: 767px)', width: '320px' },
    tablet: {
      media: '(min-width: 768px) and (max-width: 1279px)',
      width: '768px',
    },
    desktop: { media: '(min-width: 1280px)', width: '1280px' },
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radius: {
    none: '0',
    normal: '8px',
    high: '16px',
    round: '50%',
  },

  sizes: {
    container: '1216px',
  },

  transition: {
    primary: 'all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  shadow: {
    low: `0.2px 0.8px 0.7px hsl(${shadowColor} / 0.47),
    0.3px 1.2px 1.1px -2px hsl(${shadowColor} / 0.35),
    0.7px 3px 2.7px -4.1px hsl(${shadowColor} / 0.23);`,

    medium: `0.2px 0.8px 0.7px hsl(${shadowColor} / 0.49),
    0.4px 1.8px 1.6px -1.3px hsl(${shadowColor} / 0.39),
    1.3px 5.5px 5px -2.7px hsl(${shadowColor} / 0.3),
    3.5px 15px 13.7px -4.1px hsl(${shadowColor} / 0.21);`,

    high: `0.2px 0.8px 0.7px hsl(${shadowColor} / 0.45),
    0.5px 2.2px 2px -0.6px hsl(${shadowColor} / 0.41),
    1px 4.4px 4px -1.2px hsl(${shadowColor} / 0.37),
    2px 8.5px 7.8px -1.7px hsl(${shadowColor} / 0.32),
    3.6px 15.8px 14.5px -2.3px hsl(${shadowColor} / 0.28),
    6.3px 27.4px 25.1px -2.9px hsl(${shadowColor} / 0.24),
    10.3px 44.6px 40.9px -3.5px hsl(${shadowColor} / 0.19),
    15.8px 68.4px 62.7px -4.1px hsl(${shadowColor} / 0.15);`,
  },
};

export default theme;

document.body.style.fontFamily = theme.fonts.body;
document.body.style.fontSize = theme.fontSizes.m;
document.body.style.color = theme.colors.text;
document.body.style.backgroundColor = theme.colors.background;
