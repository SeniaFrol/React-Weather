import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends Component {

  onSearch(e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedlocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.value = '';
      window.location.hash = '#/?location=' + encodedlocation;
    }
  }

  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <strong>React Weather App</strong>
            </li>
            <li>
              <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={e =>this.onSearch(e)}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value='Get Weather'/>
              </li>
            </ul>
          </form>

        </div>
      </div>

    );
  }
}
