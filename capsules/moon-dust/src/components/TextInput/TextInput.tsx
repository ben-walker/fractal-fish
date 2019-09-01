import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { textInputFocusVariant, textInputVariant } from '../../theme/variant-map';

const StyledTextInput = styled.input`
  ${tw`
    flex
    px-5
    py-3
    outline-none
    rounded-none
    border-solid
    border
    font-normal
    text-base
  `}

  border-color: ${textInputVariant};

  ::placeholder {
    color: gray;
  }
  :focus {
    border-color: ${textInputFocusVariant};
    ::placeholder {
      color: lightgray;
    }
  }
`;

export interface ITextInput extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  variant?: 'default';
}

const TextInput: React.FC<ITextInput> = props => {
  return <StyledTextInput {...props} />;
};

TextInput.defaultProps = {
  type: 'text',
  variant: 'default',
};

export default TextInput;
