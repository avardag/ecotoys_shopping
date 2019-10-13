import React from 'react';

import './Homepage.styles.scss';
import DirectoryMenu from '../../components/DirectoryMenu/DirectoryMenu';

const Hompage = () => {
  return (
    <div className="Homepage">
      <div className="directory-menu">

    <DirectoryMenu/>


      </div>
    </div>
  );
};

export default Hompage;