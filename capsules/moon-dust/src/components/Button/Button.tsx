import React from 'react';
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import tw from 'tailwind.macro';

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: '#96ACB7', dark: '' },
  primary: { light: '#0496FF', dark: '' },
});

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'default' | 'primary';
  outlined?: boolean;
}

const StyledButton = styled.button`
  ${tw`
    outline-none
    select-none
    px-4
    py-2
    m-3
    rounded
    font-semibold
    text-base
    cursor-pointer
    border-solid
    hover:opacity-75
  `}
  border-width: 3px;
  border-color: ${backgroundColor};
  background-color: ${(props: IButton) => (props.outlined ? 'transparent' : backgroundColor)};
  color: ${(props: IButton) => (props.outlined ? backgroundColor : 'white')};
`;

const Button: React.FC<IButton> = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.defaultProps = {
  outlined: false,
  variant: 'default',
};

export default Button;
