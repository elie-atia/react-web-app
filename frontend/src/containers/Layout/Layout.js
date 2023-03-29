import React from 'react';
import PersistentDrawerLeft from './PersistentDrawerLeft';

const Layout = ({ children }) => {
  return (
    <>
      <PersistentDrawerLeft />
      <div>
        {children}
      </div>
      <footer>
        // Footer content
      </footer>
    </>
  );
};

export default Layout;