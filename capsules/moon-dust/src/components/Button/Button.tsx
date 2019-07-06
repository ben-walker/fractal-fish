import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`
    rounded-full
    outline-none
    bg-transparent
    px-3
    py-2
    border-4
    text-sm
    font-semibold
    font-sans
    cursor-pointer
    hover:shadow-lg
  `}
`;

interface IProps {
  text: string;
}

const Button: React.FC<IProps> = props => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
