import React from 'react';
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import tw from 'tailwind.macro';

const color = theme.variants('mode', 'variant', {
  default: { light: '#96ACB7', dark: '' },
  primary: { light: '#0496FF', dark: '' },
});

const StyledButton = styled.button`
  ${tw`
    outline-none
    select-none
    border-4
    border-solid
    px-4
    py-3
    m-3
    rounded
    font-semibold
    text-base
    cursor-pointer
  `}
  color: ${color};
  border-color: ${color};
`;

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'default' | 'primary';
}

const Button: React.FC<IButton> = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
