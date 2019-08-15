import theme from 'styled-theming';

const variantMap: theme.VariantMap = {
  default: { light: '#96acb7', dark: '' },
  primary: { light: '#0496ff', dark: '' },
};

export default theme.variants('mode', 'variant', variantMap);
