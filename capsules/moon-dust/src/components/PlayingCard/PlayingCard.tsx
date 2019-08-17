import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledPlayingCard = styled.div``;

const CardFace = styled(animated.div)`
  ${tw`
    m-4
    w-32
    h-48
    rounded
    shadow-lg
    cursor-pointer
    bg-cover
    bg-transparent
    absolute
  `}
`;

export interface IPlayingCard extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  suit: string;
}

const PlayingCard: React.FC<IPlayingCard> = props => {
  const [isFlipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    config: config.slow,
    opacity: isFlipped ? 1 : 0,
    transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
  });

  return (
    <StyledPlayingCard onClick={() => setFlipped(state => !state)}>
      <CardFace
        style={{
          backgroundColor: 'green',
          opacity: opacity.interpolate(o =>
            typeof o === 'undefined' ? 1 : 1 - parseInt(o.toString(), 10)
          ),
          transform,
        }}
      />
      <CardFace
        style={{
          backgroundColor: 'blue',
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      />
    </StyledPlayingCard>
  );
};

export default PlayingCard;
