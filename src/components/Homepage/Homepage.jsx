import React from 'react';

import './Homepage.scss';

const Hompage = () => {
  return (
    <div className="Homepage">
      <div className="directory-menu">

        <div className="menu-item">
          <div className="content">
            <h1 className="title">
              Toycars
            </h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>

        
        <div className="menu-item">
          <div className="content">
            <h1 className="title">
              Constructors
            </h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">
              Docks
            </h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">
              Girls
            </h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">
              Boys
            </h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hompage;