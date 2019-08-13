import React, { useState } from 'react';
import { Menu } from 'react-feather';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const ToggleContainer = styled.div`
  ${tw`
    fixed
    top-0
    left-0
    m-3
    cursor-pointer
  `}
`;

const MobileNavigationBar: React.FC = props => {
  const [open, setOpen] = useState(false);

  return (
    <ToggleContainer onClick={() => setOpen(!open)}>
      <Menu color="#4a5568" />
    </ToggleContainer>
  );
};

export default MobileNavigationBar;
