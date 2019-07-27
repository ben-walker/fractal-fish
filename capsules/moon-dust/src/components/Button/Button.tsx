import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`
    rounded-full
    outline-none
    select-none
    border-none
    bg-purple-500
    hover:bg-purple-600
    px-4
    py-3
    m-3
    font-bold
    text-sm
    text-white
    cursor-pointer
    shadow-md
  `}
`;

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<IButtonProps> = props => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
