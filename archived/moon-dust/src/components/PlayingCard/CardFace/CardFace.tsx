import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledCardFace = styled.div`
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

const CardFace: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return <StyledCardFace {...props} />;
};

export default CardFace;
