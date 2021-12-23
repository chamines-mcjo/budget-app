export const palette = {
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

export const fontFamily = {
  fontBold: {
    fontFace: 'Inter_700Bold',
  },
  fontSemiBold: {
    fontFace: 'Inter_600SemiBold',
  },
  fontMedium: {
    fontFace: 'Inter_500Medium',
  },
  fontRegular: {
    fontFace: 'Inter_400Regular',
  },
};

export const fontSize = {
  textXs: {
    fontSize: 13,
    lineHeight: 18,
  },
  textSm: {
    fontSize: 14,
    lineHeight: 20,
  },
  textBase: {
    fontSize: 15,
    lineHeight: 22,
  },
  textMd: {
    fontSize: 16,
    lineHeight: 24,
  },
  textLg: {
    fontSize: 17,
    lineHeight: 24,
  },
  textXl: {
    fontSize: 18,
    lineHeight: 20,
  },
  text2Xl: {
    fontSize: 20,
    lineHeight: 24,
  },
  text3Xl: {
    fontSize: 24,
    lineHeight: 28,
  },
  text4Xl: {
    fontSize: 28,
    lineHeight: 32,
  },
  text5Xl: {
    fontSize: 32,
    lineHeight: 38,
  },
};

export const typography = {
  largeTitle: {
    ...fontFamily.fontBold,
    ...fontSize.text5Xl,
  },
  h1: {
    ...fontFamily.fontBold,
    ...fontSize.text4Xl,
  },
  h2: {
    ...fontFamily.fontBold,
    ...fontSize.text3Xl,
  },
  h3: {
    ...fontFamily.fontBold,
    ...fontSize.text2Xl,
  },
  h4: {
    ...fontFamily.fontBold,
    ...fontSize.textXl,
  },
  textLarge: {
    ...fontSize.textLg,
  },
  textMedium16: {
    ...fontSize.textMd,
  },
  textMedium: {
    ...fontSize.textBase,
  },
  textSmall14: {
    ...fontSize.textSm,
  },
  textSmall: {
    ...fontSize.textXs,
  },
};
