import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`
    rounded-full
    outline-none
    select-none
    border-none
    bg-purple-400
    px-4
    py-3
    text-sm
    text-white
    cursor-pointer
    shadow-lg
  `}
`;

interface IProps {
  text: string;
}

const Button: React.FC<IProps> = props => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
