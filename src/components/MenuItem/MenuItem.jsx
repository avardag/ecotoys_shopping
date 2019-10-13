import React from 'react';
import { withRouter } from "react-router-dom";

import './MenuItem.styles.scss';

const MenuItem = ({title, imageURL, size, linkURL, history, match}) => {
  return (
    <div 
      className={`${size} menu-item`}
      onClick={()=>history.push(`${match.url}${linkURL}`)}
    >

      <div 
        className="background-image"  
        style={{ 
          backgroundImage: `url(${imageURL})`
         }}
        />

      <div className="content">
        <h1 className="title">
          {title.toUpperCase()}
        </h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);