import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import variant from '../../theme/variant-map';

const StyledTextInput = styled.input`
  ${tw`
    outline-none
    rounded-none
    border-0
    border-b-2
    px-2
    py-2
    font-regular
    text-base
  `}
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
