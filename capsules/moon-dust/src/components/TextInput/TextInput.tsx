import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledTextInput = styled.input`
  ${tw`
    rounded
    border-solid
    border
    border-gray-500
    px-3
    py-3
    font-regular
    text-sm
  `}
`;

export interface ITextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
}

const TextInput: React.FC<ITextInputProps> = props => {
  return <StyledTextInput placeholder={props.placeholder} type={props.type} />;
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
