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
    m-3
    px-4
    py-2
    rounded-sm
    outline-none
    select-none
    font-medium
    text-base
    cursor-pointer
    border-2
    border-solid
    hover:underline
  `}
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
