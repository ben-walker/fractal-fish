import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledDesktopNavigationBar = styled.ul`
  ${tw`
    fixed
    bottom-o
    left-0
    h-full
    w-56
    p-0
    m-0
    bg-gray-100
  `}
  list-style-type: none;
`;

const DesktopNavigationBar: React.FC = props => {
  return <StyledDesktopNavigationBar>{props.children}</StyledDesktopNavigationBar>;
};

export default DesktopNavigationBar;
