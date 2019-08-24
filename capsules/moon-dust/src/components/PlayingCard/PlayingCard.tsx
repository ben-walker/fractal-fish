import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { ReactComponent as BackDisplay } from '../../assets/logo.svg'; // TODO: Make card back art configurable
import CardBack from './CardBack/CardBack';
import CardFace from './CardFace/CardFace';

const AnimatedCardBack = animated(CardBack);
const AnimatedCardFace = animated(CardFace);

const StyledCard = styled.div`
  ${tw`
    m-3
    cursor-pointer
  `}
`;

export interface IPlayingCard extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  suit: string;
  isFlippedInitially?: boolean;
}

const PlayingCard: React.FC<IPlayingCard> = props => {
  const [isFlipped, setFlipped] = useState(props.isFlippedInitially);

  const { transform, opacity } = useSpring({
    config: config.default,
    opacity: isFlipped ? 0 : 1,
    transform: `rotateY(${isFlipped ? 0 : 180}deg)`,
  });

  const interpolateOpacity = (o: any) => (typeof o === 'number' ? 1 - o : 1);

  return (
    <StyledCard onClick={() => setFlipped(state => !state)}>
      <AnimatedCardBack
        style={{
          boxShadow: isFlipped ? undefined : 'none',
          opacity: opacity.interpolate(o => interpolateOpacity(o)),
          transform,
        }}
        display={BackDisplay}
      />
      <AnimatedCardFace
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      />
    </StyledCard>
  );
};

PlayingCard.defaultProps = {
  isFlippedInitially: false,
};

export default PlayingCard;
