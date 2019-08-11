import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledTextInput = styled.input`
  ${tw`
    m-3
    px-3
    py-3
    outline-none
    rounded-sm
    border-solid
    border
    border-gray-500
    focus:border-black
    focus:shadow-inner
    font-normal
    text-sm
  `}
`;

export interface ITextInput extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
}

const TextInput: React.FC<ITextInput> = props => {
  return <StyledTextInput {...props} />;
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
