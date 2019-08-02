import initials from 'initials';
import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const fontSizeMod = 1 / 3;
const maxInitialsChars = 2;

export interface IUserAvatar extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size: number;
  src?: string;
}

const StyledAvatar = styled.div`
  ${tw`
    p-0
    m-0
    flex
    rounded-full
    items-center
    justify-center
    font-semibold
    select-none
    bg-orange-400
  `}
  width: ${(p: IUserAvatar) => `${p.size}rem`};
  height: ${(p: IUserAvatar) => `${p.size}rem`};
  font-size: ${(p: IUserAvatar) => `${p.size * fontSizeMod}rem`};
`;

const UserAvatar: React.FC<IUserAvatar> = props => {
  const getInitials = (name: string) => initials(props.name).substring(0, maxInitialsChars);

  return <StyledAvatar {...props}>{getInitials(props.name)}</StyledAvatar>;
};

export default UserAvatar;
