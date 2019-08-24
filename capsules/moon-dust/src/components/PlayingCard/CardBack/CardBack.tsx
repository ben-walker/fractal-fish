import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export interface ICardBack extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

const StyledCardBack = styled.div`
  ${tw`
    absolute
    w-32
    h-48
    rounded-sm
    shadow
    bg-white
    bg-center
    bg-no-repeat
  `}
  background-image: url(${(props: ICardBack) => props.src});
`;

const CardBack: React.FC<ICardBack> = props => {
  return <StyledCardBack {...props} />;
};

export default CardBack;
