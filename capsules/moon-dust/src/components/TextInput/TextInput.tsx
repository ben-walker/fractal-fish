import React from 'react';
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import tw from 'tailwind.macro';

const color = theme.variants('mode', 'variant', {
  default: { light: '#96ACB7', dark: '' },
  primary: { light: '#0496FF', dark: '' },
});

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
  border-color: ${color};
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
