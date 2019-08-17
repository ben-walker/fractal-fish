import React from 'react';
import { Menu } from 'react-feather';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { useComponentVisible } from '../../../hooks/ComponentVisible/ComponentVisible';

const ToggleContainer = styled.div`
  ${tw`
    fixed
    top-0
    left-0
    m-3
    cursor-pointer
  `}
`;

const SideBar = styled(animated.div)`
  ${tw`
    fixed
    bottom-0
    left-0
    h-full
    p-0
    m-0
    bg-gray-100
    shadow
  `}
  list-style-type: none;
`;

const MobileNavigationBar: React.FC = props => {
  const { ref, open, setOpen } = useComponentVisible(false);

  const spring = useSpring({
    config: config.default,
    width: open ? '14rem' : '0rem',
  });

  return (
    <>
      <ToggleContainer onClick={() => setOpen(true)}>
        <Menu color="#4a5568" />
      </ToggleContainer>
      <SideBar ref={ref} style={spring} />
    </>
  );
};

export default MobileNavigationBar;
