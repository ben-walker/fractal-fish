import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const OverlayToggle = styled(animated(ChevronDown))`
  ${tw`
    fixed
    top-0
    left-0
    m-2
    cursor-pointer
    z-10
  `}
  color: #525252;
`;

const Overlay = styled(animated.div)`
  ${tw`
    fixed
    top-0
    w-full
    p-0
    m-0
    list-none
  `}
  background-color: #f7f9fa;
`;

const MobileNavigationBar: React.FC = props => {
  const [open, setOpen] = useState(false);
  const [closedHeight, openHeight] = ['0%', '100%'];

  const overlaySpring = useSpring({
    config: config.default,
    height: open ? openHeight : closedHeight,
  });

  const toggleSpring = useSpring({
    config: config.stiff,
    transform: `rotate(${open ? 180 : 0}deg)`,
  });

  return (
    <>
      <OverlayToggle style={toggleSpring} onClick={() => setOpen(state => !state)} />
      <Overlay style={overlaySpring} />
    </>
  );
};

export default MobileNavigationBar;
