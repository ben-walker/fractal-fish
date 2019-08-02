import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledLabel = styled.div`
  ${tw`
    block
    text-left
    m-4
  `}
`;

const StyledP = styled.p`
  ${tw`
    select-none
    text-base
    font-medium
  `}
`;

export interface ILabelProps {
  text: string;
}

const Label: React.FC<ILabelProps> = props => {
  return (
    <StyledLabel>
      <StyledP>{props.text}</StyledP>
      {props.children}
    </StyledLabel>
  );
};

export default Label;
