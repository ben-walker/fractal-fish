import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledTextButton = styled.button`
  ${tw`
    outline-none
    select-none
    border-none
    bg-transparent
    font-semibold
    text-sm
    cursor-pointer
    text-orange-500
    hover:text-orange-400
    flex
    items-center
  `}
`;

const StyledIcon = styled.div`
  padding-right: 0.3rem;
`;

export interface ITextButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
}

const TextButton: React.FC<ITextButton> = props => {
  return (
    <StyledTextButton>
      {props.icon && <StyledIcon>{props.icon}</StyledIcon>}
      {props.text}
    </StyledTextButton>
  );
};

export default TextButton;
