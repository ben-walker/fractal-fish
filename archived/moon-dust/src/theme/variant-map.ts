import theme from 'styled-theming';

const [mode, variant] = ['mode', 'variant'];

export const buttonVariant = theme.variants(mode, variant, {
  default: { light: '#808080', dark: '' },
  primary: { light: '#0496ff', dark: '' },
});
