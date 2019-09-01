import theme from 'styled-theming';

const [mode, variant] = ['mode', 'variant'];

export const buttonVariant = theme.variants(mode, variant, {
  default: { light: '#a8a8a8', dark: '' },
  primary: { light: '#0496ff', dark: '' },
});

export const buttonHoverVariant = theme.variants(mode, variant, {
  default: { light: '#525252', dark: '' },
  primary: { light: '#0586e3', dark: '' },
});

export const textInputVariant = theme.variants(mode, variant, {
  default: { light: '#a8a8a8', dark: '' },
});

export const textInputFocusVariant = theme.variants(mode, variant, {
  default: { light: '#525252', dark: '' },
});
