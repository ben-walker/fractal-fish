import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export interface ICardBack extends React.HTMLAttributes<HTMLDivElement> {
  display: React.FunctionComponent;
}

const StyledCardBack = styled.div`
  ${tw`
    absolute
    flex
    w-32
    h-48
    rounded-sm
    shadow-md
    bg-white
  `}
`;

const CardBack: React.FC<ICardBack> = props => {
  const Display = props.display;

  return (
    <StyledCardBack {...props}>
      <Display />
    </StyledCardBack>
  );
};

export default CardBack;
