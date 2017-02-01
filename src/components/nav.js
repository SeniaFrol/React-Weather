import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav {
  onSearch (e) {
    e.preventDefault;
    alert('Dont do it still')
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
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" />
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
