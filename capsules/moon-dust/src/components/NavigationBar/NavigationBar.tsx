import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledNavigationBar = styled(animated.ul)`
  ${tw`
    p-0
    m-0
    bg-transparent
    border-solid
    border-0
    border-transparent
    shadow-lg
    fixed
    bottom-0
    right-0
    rounded
    h-full
  `}
  list-style-type: none;
  will-change: width;
`;

const NavigationBar: React.FC = props => {
  const [isExpanded, setExpanded] = useState(false);
  const [big, little] = ['14rem', '4rem'];

  const animatedStyle = useSpring({
    config: config.stiff,
    width: isExpanded ? big : little,
  });

  return (
    <StyledNavigationBar
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={animatedStyle}
    >
      {props.children}
    </StyledNavigationBar>
  );
};

export default NavigationBar;
