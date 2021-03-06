import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { buttonVariant } from '../../theme/variant-map';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'default' | 'primary';
  outlined?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button`
  ${tw`
    flex
    px-5
    py-2
    rounded-sm
    outline-none
    select-none
    font-medium
    text-base
    cursor-pointer
    border-2
    border-solid
  `}
  color: ${(props: IButton) => (props.outlined ? '#333333' : 'white')};
  background-color: ${(props: IButton) => (props.outlined ? 'transparent' : buttonVariant)};
  border-color: ${buttonVariant};
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button: React.FC<IButton> = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.defaultProps = {
  disabled: false,
  outlined: false,
  variant: 'default',
};

export default Button;
