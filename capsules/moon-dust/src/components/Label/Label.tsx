import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export interface ILabel extends React.HTMLAttributes<HTMLLabelElement> {
  text: string;
  size?: string;
  weight?: number;
}

const StyledLabel = styled.label`
  ${tw`
    select-none
  `}
  font-size: ${(props: ILabel) => props.size};
  font-weight: ${(props: ILabel) => props.weight};
`;

const Label: React.FC<ILabel> = props => {
  return <StyledLabel {...props}>{props.text}</StyledLabel>;
};

Label.defaultProps = {
  size: '1.25rem',
  weight: 400,
};

export default Label;
