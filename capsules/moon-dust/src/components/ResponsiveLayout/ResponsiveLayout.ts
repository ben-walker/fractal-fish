import React from 'react';
import { useWindowDimensions } from '../../providers/WindowDimensions/WindowDimensions';

export interface IResponsiveLayout {
  breakpoint: number;
  mobile(): any;
  desktop(): any;
}

const ResponsiveLayout: React.FC<IResponsiveLayout> = props => {
  const { width } = useWindowDimensions();

  return width > props.breakpoint ? props.desktop() : props.mobile();
};

export default ResponsiveLayout;
