import theme from 'styled-theming';

const variantMap: theme.VariantMap = {
  default: { light: '#96ACB7', dark: '' },
  primary: { light: '#0496FF', dark: '' },
};

export default theme.variants('mode', 'variant', variantMap);
