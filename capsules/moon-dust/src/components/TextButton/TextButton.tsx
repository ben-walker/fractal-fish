import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import variant from '../../theme/variant-map';

export interface ITextButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  variant?: 'default' | 'primary';
}

const StyledTextButton = styled.button`
  ${tw`
    outline-none
    select-none
    border-none
    bg-transparent
    font-semibold
    text-base
    cursor-pointer
    flex
    items-center
  `}
  color: ${variant};
`;

const StyledIcon = styled.div`
  padding-right: 0.3rem;
`;

const TextButton: React.FC<ITextButton> = props => {
  return (
    <StyledTextButton {...props}>
      {props.icon && <StyledIcon>{props.icon}</StyledIcon>}
      {props.text}
    </StyledTextButton>
  );
};

TextButton.defaultProps = {
  variant: 'default',
};

export default TextButton;
