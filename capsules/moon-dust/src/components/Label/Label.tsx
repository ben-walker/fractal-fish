import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledLabel = styled.div`
  ${tw`
    block
    text-left
  `}
`;

const StyledP = styled.p`
  ${tw`
    select-none
    text-lg
    font-semibold
  `}
`;

export interface ILabel {
  text: string;
}

const Label: React.FC<ILabel> = props => {
  return (
    <StyledLabel>
      <StyledP>{props.text}</StyledP>
      {props.children}
    </StyledLabel>
  );
};

export default Label;
