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
    this.setState({isLoading: true});

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

  render() {
    const {location, temp, desc, isLoading} = this.state;

    function renderMessage(){
      if(isLoading) {
        return <h3>Weather is loading...</h3>;
      } else if(temp && location && desc) {
          return <WeatherMessage temp={temp} location={location} desc={desc}/>;
      }
    }

    return(
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}
