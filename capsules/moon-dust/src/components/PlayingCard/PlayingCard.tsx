import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import logo from '../../assets/logo.svg'; // TODO: Make card back art configurable
import CardBack from './CardBack/CardBack';
import CardFace from './CardFace/CardFace';

const AnimatedCardBack = animated(CardBack);
const AnimatedCardFace = animated(CardFace);

export interface IPlayingCard extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  suit: string;
}

const PlayingCard: React.FC<IPlayingCard> = props => {
  const [isFlipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    config: config.default,
    opacity: isFlipped ? 0 : 1,
    transform: `rotateY(${isFlipped ? 0 : 180}deg)`,
  });

  return (
    <div onClick={() => setFlipped(state => !state)}>
      <AnimatedCardBack
        style={{
          boxShadow: isFlipped ? undefined : 'none',
          opacity: opacity.interpolate(o =>
            typeof o === 'undefined' ? 1 : 1 - parseInt(o.toString(), 10)
          ),
          transform,
        }}
        src={logo}
      />
      <AnimatedCardFace
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      />
    </div>
  );
};

export default PlayingCard;
