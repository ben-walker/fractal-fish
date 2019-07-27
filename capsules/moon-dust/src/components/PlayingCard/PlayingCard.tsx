import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledPlayingCard = styled(animated.div)`
  ${tw`
    m-4
    w-32
    h-48
    rounded
    shadow-md
    hover:shadow-lg
    cursor-pointer
    text-center
  `}
`;

export interface IPlayingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  suit: string;
}

const PlayingCard: React.FC<IPlayingCardProps> = props => {
  const [isFlipped, setFlipped] = useState(false);

  return <StyledPlayingCard onClick={() => setFlipped(state => !state)} />;
};

export default PlayingCard;
