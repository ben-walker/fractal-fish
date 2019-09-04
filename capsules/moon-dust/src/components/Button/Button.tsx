import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { buttonHoverVariant, buttonVariant } from '../../theme/variant-map';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'default' | 'primary';
  filled?: boolean;
}

const StyledButton = styled.button`
  ${tw`
    px-5
    py-3
    rounded-none
    outline-none
    select-none
    font-normal
    text-base
    cursor-pointer
    border
    border-solid
  `}

  color: ${(props: IButton) => (props.filled ? 'white' : '#2d3748')};
  border-color: ${buttonVariant};
  background-color: ${(props: IButton) => (props.filled ? buttonVariant : 'transparent')};

  :hover {
    border-color: ${buttonHoverVariant};
    background-color: ${(props: IButton) => (props.filled ? buttonHoverVariant : 'transparent')};
  }
`;

const Button: React.FC<IButton> = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.defaultProps = {
  filled: false,
  variant: 'default',
};

export default Button;
