import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`
    outline-none
    select-none
    border-none
    px-6
    py-2
    m-3
    rounded
    bg-orange-500
    hover:bg-orange-400
    font-semibold
    text-sm
    text-white
    cursor-pointer
  `}
`;

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<IButton> = props => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
