import React from 'react';

const WeatherMessage = ({desc, temp, location}) => {
  return(
    <div>
      <h3 className="text-center">Its {desc} and {temp}C in  {location}</h3>
    </div>
  );
}

export default WeatherMessage;
