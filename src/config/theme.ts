import { createTheme, BaseTheme } from '@shopify/restyle';

const palette = {
  blue: {
    primary: '#1761C5',
    shade10: '#024EB5',
    shade20: '#003D8F',
    shade30: '#002F70',
    tint10: '#2E78DC',
    tint20: '#8AB7F4',
    tint30: '#BFD6F6',
    tint40: '#E8F2FF',
  },
  cyan: {
    primary: '#0BB8E4',
    shade10: '#0093B9',
    shade20: '#0093B9',
    shade30: '#005267',
    tint10: '#44C8E9',
    tint20: '#87DDF3',
    tint30: '#CAF4FF',
    tint40: '#E5F9FE',
  },
  green: {
    primary: '#00B167',
    shade10: '#008859',
    shade20: '#008859',
    shade30: '#008859',
    tint10: '#26BD7E',
    tint20: '#4DC895',
    tint30: '#A6EDCF',
    tint40: '#D9F3E8',
  },
  orange: {
    primary: '#F26333',
    shade10: '#D94310',
    shade20: '#B12E02',
    shade30: '#B12E02',
    tint10: '#F47A51',
    tint20: '#FFA080',
    tint30: '#FFC9B8',
    tint40: '#FFEBE4',
  },
  red: {
    primary: '#F55053',
    shade10: '#DE3A3D',
    shade20: '#C62B2E',
    shade30: '#A0070A',
    tint10: '#F26669',
    tint20: '#FF8C8E',
    tint30: '#F7B4B5',
    tint40: '#FEE5E5',
  },
  ink: {
    primary: '#040C22',
    tint10: '#363D4E',
    tint20: '#5C616F',
    tint30: '#A7AAB2',
  },
  sky: {
    primary: '#CDD4DB',
    tint10: '#DEE3E7',
    tint20: '#E8EBEE',
    tint30: '#F6F7F8',
  },
  black: {
    primary: '#000',
  },
  white: {
    primary: '#FFF',
  },
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white.primary,
  },
  spacing: {
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '5': 20,
    '6': 24,
    '7': 28,
    '8': 32,
    '9': 36,
    '10': 40,
  },
  breakpoints: {},
});

export type AppTheme = typeof theme;
export default theme;
