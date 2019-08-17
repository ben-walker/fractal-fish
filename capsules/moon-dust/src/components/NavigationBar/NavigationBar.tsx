import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout/ResponsiveLayout';
import DesktopNavigationBar from './DesktopNavigationBar/DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar/MobileNavigationBar';

export interface INavigationBar {
  breakpoint?: number;
}

const NavigationBar: React.FC<INavigationBar> = props => {
  return (
    <ResponsiveLayout
      breakpoint={props.breakpoint || 0}
      desktop={() => <DesktopNavigationBar {...props} />}
      mobile={() => <MobileNavigationBar {...props} />}
    />
  );
};

NavigationBar.defaultProps = {
  breakpoint: 1024,
};

export default NavigationBar;
