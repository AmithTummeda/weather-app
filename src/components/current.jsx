const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <img src={`icons/${currentWeather.weatherIcon}.svg`} className="weather-icon" />
      <h2 className="temperature">
        {currentWeather.temperature} °C
      </h2>
      <h5 className="description">{currentWeather.description}</h5>
      <div className="other-details">
        <p className="feelslike">
          <span className="label"> Feels like </span>
          <span className="value"> {currentWeather.feelslike} °C </span>
        </p>
        <p className="humidity">
          <span className="label"> Humidity </span>
          <span className="value"> {currentWeather.humidity} % </span>
        </p>
        <p className="wind">
          <span className="label"> Wind speed </span>
          <span className="value"> {currentWeather.wind} KMPH </span>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;