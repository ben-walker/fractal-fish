import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout/ResponsiveLayout';
import DesktopNavigationBar from './DesktopNavigationBar/DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar/MobileNavigationBar';

const NavigationBar: React.FC = props => {
  return (
    <ResponsiveLayout
      breakpoint={1024}
      desktop={() => <DesktopNavigationBar {...props} />}
      mobile={() => <MobileNavigationBar {...props} />}
    />
  );
};

export default NavigationBar;
