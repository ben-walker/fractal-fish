import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledNavigationBar = styled.ul`
  ${tw`
    fixed
    bottom-0
    left-0
    h-full
    w-56
    p-0
    m-0
    bg-gray-100
  `}
  list-style-type: none;
`;

const NavigationBar: React.FC = props => {
  return <StyledNavigationBar>{props.children}</StyledNavigationBar>;
};

export default NavigationBar;
