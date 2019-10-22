import React from 'react';

import DirectoryMenu from '../../components/DirectoryMenu/DirectoryMenu';
import { HomePageContainer } from './HomePage.styles';

const Hompage = () => {
  return (
    <HomePageContainer>
      <div className="directory-menu">

    <DirectoryMenu/>


      </div>
    </HomePageContainer>
  );
};

export default Hompage;