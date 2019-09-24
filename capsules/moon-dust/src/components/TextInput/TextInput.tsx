import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledTextInput = styled.input`
  ${tw`
    flex
    bg-transparent
    px-4
    py-3
    rounded-sm
    border-solid
    border-2
    border-gray-500
    font-normal
    text-base
    focus:shadow-outline
  `}
  color: darkslategray;
  ::placeholder {
    color: gray;
  }
  :focus {
    border-color: #0496ff;
  }
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
