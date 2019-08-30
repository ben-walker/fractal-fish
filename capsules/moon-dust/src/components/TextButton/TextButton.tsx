import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { buttonVariant } from '../../theme/variant-map';

export interface ITextButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: 'default' | 'primary';
}

const StyledTextButton = styled.button`
  ${tw`
    m-3
    outline-none
    select-none
    border-none
    bg-transparent
    font-medium
    text-base
    cursor-pointer
    flex
    items-center
    hover:underline
  `}
  color: ${buttonVariant};
`;

const TextButton: React.FC<ITextButton> = props => {
  return (
    <StyledTextButton {...props}>
      {props.children}
      {props.text}
    </StyledTextButton>
  );
};

TextButton.defaultProps = {
  variant: 'default',
};

export default TextButton;
