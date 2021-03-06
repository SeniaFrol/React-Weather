import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const loc = this.state.location;

    if(loc.length > 0) {
      this.setState({location: ""});
      this.props.onSearch(loc);
    }
  }

  onInputChange(e) {
    this.setState({location: e});
  }



  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="navbar-form navbar-left">
        <input type="text" value={this.state.location} onChange={e => this.onInputChange(e.target.value)} />
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
}
