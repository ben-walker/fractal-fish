import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const OverlayOpen = styled(Menu)`
  ${tw`
    fixed
    top-0
    left-0
    m-3
    cursor-pointer
  `}
  color: #525252;
`;

const OverlayClose = styled(X)`
  ${tw`
    top-0
    left-0
    m-1
    cursor-pointer
  `}
  color: #525252;
`;

const OverlayWrapper = styled(animated.div)`
  ${tw`
    items-center
    justify-center
    fixed
    top-0
    left-0
    w-full
    h-full
  `}
`;

const Overlay = styled.div`
  ${tw`
    inline-block
    p-0
    list-none
    shadow-2xl
    rounded
    bg-white
  `}
  height: 97%;
  width: 95%;
`;

const MobileNavigationBar: React.FC = props => {
  const [open, setOpen] = useState(false);

  const fadeSpring = useSpring({
    config: config.stiff,
    display: open ? 'flex' : 'none',
    opacity: open ? 1 : 0,
  });

  return (
    <>
      <OverlayOpen onClick={() => setOpen(true)} />
      <OverlayWrapper style={fadeSpring}>
        <Overlay>
          <OverlayClose onClick={() => setOpen(false)} />
        </Overlay>
      </OverlayWrapper>
    </>
  );
};

export default MobileNavigationBar;
