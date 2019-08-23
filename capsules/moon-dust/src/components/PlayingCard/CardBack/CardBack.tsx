import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledCardBack = styled.img`
  ${tw`
    m-3
    w-32
    h-48
    rounded-sm
    cursor-pointer
    shadow
    hover:shadow-md
  `}
`;

export interface ICardBack {
  src: string;
}

const CardBack: React.FC<ICardBack> = props => {
  return <StyledCardBack src={props.src} />;
};

export default CardBack;
