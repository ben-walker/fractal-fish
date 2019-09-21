import theme from 'styled-theming';

const [mode, variant] = ['mode', 'variant'];

export const buttonVariant = theme.variants(mode, variant, {
  default: { light: '#a8a8a8', dark: '' },
  primary: { light: '#0496ff', dark: '' },
});
