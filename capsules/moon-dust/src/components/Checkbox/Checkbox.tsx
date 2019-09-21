import React, { useState } from 'react';
import { CheckCircle, Circle } from 'react-feather';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledCheckbox = styled.a`
  ${tw`
    cursor-pointer
  `}
`;

export interface ICheckbox {
  checked?: boolean;
}

// TODO: Add animation between states
const Checkbox: React.FC<ICheckbox> = props => {
  const [checked, setChecked] = useState(props.checked);

  return (
    <StyledCheckbox onClick={() => setChecked(state => !state)}>
      {checked ? <CheckCircle /> : <Circle />}
    </StyledCheckbox>
  );
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
