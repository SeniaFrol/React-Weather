import React from 'react';
import Nav from './nav.js';

const Main = (props) => {
    return(
      <div>
        <Nav />
        <h2>Main component</h2>
        {props.children}
      </div>
    );
}

export default Main;
