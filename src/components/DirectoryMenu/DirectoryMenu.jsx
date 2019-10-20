import React from 'react';
import { connect } from 'react-redux';

import './DirectoryMenu.styles.scss';
import MenuItem from '../MenuItem/MenuItem';
//selector
import { selectDirectoryMenuSections } from '../../redux/directoryMenu/directoryMenuSelectors';

const DirectoryMenu =({sections})=> {
    return (
      <div className="directory-menu">
        {
          sections.map(({id, ...restOfProps})=>(
            <MenuItem 
              key={id} 
              {...restOfProps}
               />
          ))
        }
      </div>
    );
};
const mapStateToProps = (state)=>({
  sections: selectDirectoryMenuSections(state)
})
export default connect(mapStateToProps)(DirectoryMenu);