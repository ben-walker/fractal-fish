import initials from 'initials';
import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const fontSizeMod = 1 / 3;

export interface IUserAvatar extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: number;
  src?: string;
  maxChars?: number;
}

const StyledAvatar = styled.div`
  ${tw`
    p-0
    m-3
    flex
    rounded-full
    items-center
    justify-center
    font-semibold
    select-none
    text-white
  `}
  background-color: #0496FF;
  width: ${(p: IUserAvatar) => `${p.size}rem`};
  height: ${(p: IUserAvatar) => `${p.size}rem`};
  font-size: ${(p: IUserAvatar) =>
    typeof p.size === 'undefined' ? '5rem' : `${p.size * fontSizeMod}rem`};
`;

const UserAvatar: React.FC<IUserAvatar> = props => {
  const getInitials = (name: string) => initials(name).substring(0, props.maxChars);

  return (
    <StyledAvatar {...props}>
      {props.src ? null : <div>{getInitials(props.name)}</div>}
    </StyledAvatar>
  );
};

UserAvatar.defaultProps = {
  maxChars: 2,
  size: 5,
};

export default UserAvatar;
