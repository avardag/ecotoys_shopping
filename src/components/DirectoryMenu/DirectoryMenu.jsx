import React from 'react';
import './DirectoryMenu.styles.scss';
import MenuItem from '../MenuItem/MenuItem';


class DirectoryMenu extends React.Component {
  state={
    sections: [
      {
        title: 'cartoys',
        imageURL : 'https://picsum.photos/id/1072/387/259',
        id: 1
      },
      {
        title: 'educational',
        imageURL : 'https://picsum.photos/id/20/367/246',
        id: 2
      },
      {
        title: 'baby toys',
        imageURL : 'https://picsum.photos/id/96/475/316',
        id: 3
      },
      {
        title: 'boys',
        imageURL : 'https://picsum.photos/id/157/621/486',
        size: 'large',
        id: 4
      },
      {
        title: 'girls',
        imageURL : 'https://picsum.photos/id/146/518/345',
        size: 'large',
        id: 5
      },
    ]
  }
  render(){
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageURL, id, size})=>(
            <MenuItem 
              title={title} 
              key={id} 
              imageURL={imageURL}
              size={size}
               />
          ))
        }
      </div>
    );
  }
};

export default DirectoryMenu;