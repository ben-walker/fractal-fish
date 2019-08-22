import React from 'react';
import { Menu } from 'react-feather';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { useComponentVisible } from '../../../hooks/ComponentVisible/ComponentVisible';

const StyledMenu = styled(Menu)`
  ${tw`
    fixed
    top-0
    left-0
    m-3
    cursor-pointer
  `}
  color: #4a5568;
`;

const SideBar = styled(animated.div)`
  ${tw`
    fixed
    bottom-0
    left-0
    h-full
    p-0
    m-0
    shadow
  `}
  background-color: #f7f9fa;
  list-style-type: none;
`;

const MobileNavigationBar: React.FC = props => {
  const { ref, open, setOpen } = useComponentVisible(false);
  const [closedWidth, openWidth] = ['0rem', '14rem'];

  const spring = useSpring({
    config: config.default,
    width: open ? openWidth : closedWidth,
  });

  return (
    <>
      <StyledMenu onClick={() => setOpen(true)} />
      <SideBar ref={ref} style={spring} />
    </>
  );
};

export default MobileNavigationBar;
