import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import variant from '../../theme/variant-map';

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
  `}
  border-width: 3px;
  border-color: ${variant};
  background-color: ${(props: IButton) => (props.outlined ? 'transparent' : variant)};
  color: ${(props: IButton) => (props.outlined ? variant : 'white')};
`;

const Button: React.FC<IButton> = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.defaultProps = {
  outlined: false,
  variant: 'default',
};

export default Button;
