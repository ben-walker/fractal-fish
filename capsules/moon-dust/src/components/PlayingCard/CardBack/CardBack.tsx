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
    rounded-none
    shadow
    bg-white
  `}
`;

const CardBack: React.FC<ICardBack> = props => {
  const Display = props.display;

  // TODO: Investigate why card back doesn't show up in Safari
  return (
    <StyledCardBack {...props}>
      <Display />
    </StyledCardBack>
  );
};

export default CardBack;
