import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import tw from 'tailwind.macro';

const color = theme.variants('mode', 'variant', {
  default: { light: '#96ACB7', dark: '' },
  primary: { light: '#0496FF', dark: '' },
});

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
    hover:opacity-75
    flex
    items-center
  `}
  color: ${color};
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
