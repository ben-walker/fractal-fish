import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledTextInput = styled.input`
  ${tw`
    rounded-lg
    outline-none
    border-solid
    border-4
    border-purple-500
    px-2
    py-2
    font-bold
    text-sm
    shadow-lg
  `}
`;

export interface IProps {
  placeholder: string;
  type: string;
}

const TextInput: React.FC<IProps> = props => {
  return <StyledTextInput placeholder={props.placeholder} type={props.type} />;
};

export default TextInput;
