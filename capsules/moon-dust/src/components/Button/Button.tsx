import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { buttonVariant } from '../../theme/variant-map';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'default' | 'primary';
  outlined?: boolean;
}

const StyledButton = styled.button`
  ${tw`
    px-5
    py-3
    rounded
    outline-none
    select-none
    font-medium
    text-base
    cursor-pointer
    border-2
    border-solid
    shadow
  `}
  color: ${(props: IButton) => (props.outlined ? '#2d3748' : 'white')};
  background-color: ${(props: IButton) => (props.outlined ? 'transparent' : buttonVariant)};
  border-color: ${buttonVariant};
`;

const Button: React.FC<IButton> = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.defaultProps = {
  outlined: false,
  variant: 'default',
};

export default Button;
