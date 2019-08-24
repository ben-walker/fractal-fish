import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledCardFace = styled.div`
  ${tw`
    absolute
    m-3
    w-32
    h-48
    rounded-sm
    cursor-pointer
    shadow
    hover:shadow-md
  `}
`;

const CardFace: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return <StyledCardFace />;
};

export default CardFace;
