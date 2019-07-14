import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledNavigationBar = styled.ul`
  ${tw`
    p-0
    m-0
    bg-purple-200
    border-solid
    border-0
    border-transparent
    shadow-xl
    fixed
    bottom-0
    h-16
    w-full
    lg:h-full
    lg:w-56
  `}
  list-style-type: none;
`;

const NavigationBar: React.FC = props => {
  return <StyledNavigationBar>{props.children}</StyledNavigationBar>;
};

export default NavigationBar;
