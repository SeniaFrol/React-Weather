import React from 'react';

const About = (props) => {
  return(
    <div>
      <h1 className="text-center title-top">About</h1>
      <p>This is a Weather app build on React</p>
      <p>
        List of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a>  -  JavaScript framework
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a>  -  Used to get data about weather in choosen city.
        </li>
      </ul>
    </div>
  );
}

export default About;
