import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledTextInput = styled.input`
  ${tw``}
`;

export interface IProps {
  placeholder: string;
}

const TextInput: React.FC<IProps> = props => {
  return <StyledTextInput placeholder={props.placeholder} />;
};

export default TextInput;
