import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledTextInput = styled.input`
  ${tw`
    flex
    px-4
    py-3
    rounded
    border-solid
    border
    border-gray-400
    font-normal
    text-base
    focus:shadow-outline
  `}

  color: #2d3748;

  ::placeholder {
    color: gray;
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
