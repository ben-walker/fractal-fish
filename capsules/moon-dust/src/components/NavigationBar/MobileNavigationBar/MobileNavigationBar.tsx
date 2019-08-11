import React from 'react';
import styled from 'styled-components/macro';

const StyledMobileNavigationBar = styled.ul``;

const MobileNavigationBar: React.FC = props => {
  return <StyledMobileNavigationBar>{props.children}</StyledMobileNavigationBar>;
};

export default MobileNavigationBar;
