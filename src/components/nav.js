import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = (props) => {
    return(
      <div>
        <h2>Navigation here</h2>
        <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/examples" activeClassName="active">Examples</Link>
      </div>
    );
}

export default Nav;
