import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import variant from '../../theme/variant-map';

const StyledTextInput = styled.input`
  ${tw`
    outline-none
    rounded
    border-solid
    border
    px-3
    py-3
    font-medium
    text-base
  `}
  border-width: 3px;
  border-color: ${variant};
`;

export interface ITextInput extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  variant?: 'default' | 'primary';
}

const TextInput: React.FC<ITextInput> = props => {
  return <StyledTextInput {...props} />;
};

TextInput.defaultProps = {
  type: 'text',
  variant: 'default',
};

export default TextInput;
