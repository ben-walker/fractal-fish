import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledDesktopNavigationBar = styled.ul`
  ${tw`
    fixed
    bottom-0
    left-0
    h-full
    w-56
    p-0
    m-0
  `}
  background-color: #f7f9fa;
  list-style-type: none;
`;

const DesktopNavigationBar: React.FC = props => {
  return <StyledDesktopNavigationBar>{props.children}</StyledDesktopNavigationBar>;
};

export default DesktopNavigationBar;
