import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export interface ILink extends React.HTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const StyledLink = styled.a`
  ${tw`
    cursor-pointer
  `}
`;

const Link: React.FC<ILink> = props => {
  return <StyledLink {...props}>{props.text}</StyledLink>;
};

export default Link;
