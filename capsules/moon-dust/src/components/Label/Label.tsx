import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export interface ILabel extends React.HTMLAttributes<HTMLLabelElement> {
  text: string;
  size?: string;
}

const StyledLabel = styled.label`
  ${tw`
    select-none
    font-normal
  `}
  font-size: ${(props: ILabel) => props.size};
`;

const Label: React.FC<ILabel> = props => {
  return <StyledLabel {...props}>{props.text}</StyledLabel>;
};

Label.defaultProps = {
  size: '1.25rem',
};

export default Label;
