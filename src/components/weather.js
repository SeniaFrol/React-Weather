import React, { Component } from 'react';
import WeatherForm from './weather_form';
import WeatherMessage from './weather_message';
import openWeatherMap from '../api/openWeatherMap.js';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleSearch = (location) => {
    this.setState({
      isLoading: true,
      location: undefined,
      temp: undefined,
      desc: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp.main.temp,
        desc: temp.weather[0].description,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({isLoading: false});
      alert(errorMessage);
    });
  }

  componentDidMount() {
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render() {
    const {location, temp, desc, isLoading} = this.state;

    function renderMessage(){
      if(isLoading) {
        return <h3 className="text-center">Weather is loading...</h3>;
      } else if(temp && location && desc) {
          return <WeatherMessage temp={temp} location={location} desc={desc}/>;
      }
    }

    return(
      <div>
        <h1 className="text-center title-top">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}
