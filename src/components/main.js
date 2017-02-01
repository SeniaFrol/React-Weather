import React from 'react';
import Nav from './nav.js';

const Main = (props) => {
    return(
      <div>
        <Nav />
        <div className="row">
          <div className="columns medium-8 large-6 small-centered">
            {props.children}
          </div>
        </div>
      </div>
    );
}

export default Main;
