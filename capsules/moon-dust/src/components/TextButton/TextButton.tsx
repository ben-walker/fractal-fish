import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { buttonHoverVariant, buttonVariant } from '../../theme/variant-map';

export interface ITextButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: 'default' | 'primary';
}

const StyledTextButton = styled.button`
  ${tw`
    outline-none
    select-none
    border-none
    bg-transparent
    font-medium
    text-base
    cursor-pointer
    flex
    items-center
  `}

  color: ${buttonVariant};

  :hover {
    color: ${buttonHoverVariant};
  }
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
