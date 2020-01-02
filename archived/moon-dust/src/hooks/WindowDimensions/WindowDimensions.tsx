import React, { createContext, useContext, useEffect, useState } from 'react';

const WindowDimensionsCtx = createContext({ height: 0, width: 0 });

const WindowDimensionsProvider: React.FC = props => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowDimensionsCtx.Provider value={dimensions}>{props.children}</WindowDimensionsCtx.Provider>
  );
};

export const useWindowDimensions = () => useContext(WindowDimensionsCtx);
export default WindowDimensionsProvider;
