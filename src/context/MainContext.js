import { createContext, useContext, useEffect, useState } from 'react';
import citiesJSON from '../data/cities.json';
import axios from "axios";
import storm from '../icons/storm.png';
import rain from '../icons/rain.png';
import snow from '../icons/snow.png';
import clear from '../icons/clear.png';
import clouds from '../icons/clouds.png';
import cloudy from '../icons/cloudy.png';
import haze from '../icons/haze.png';
import wind from '../icons/wind.png';
import unk from '../icons/unk.png';

const MainContext = createContext();
const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.weatherbit.io/v2.0/forecast',
};

const MainContextProvider = ({ children }) => {
  const [city, setCity] = useState(citiesJSON[33]);
  const [weatherData, setWeatherData] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const icons = {
    '200': storm,
    '201': storm,
    '202': storm,
    '230': storm,
    '231': storm,
    '232': storm,
    '233': storm,
    '300': rain,
    '301': rain,
    '302': rain,
    '500': rain,
    '501': rain,
    '502': rain,
    '511': rain,
    '520': rain,
    '521': rain,
    '522': rain,
    '600': snow,
    '601': snow,
    '602': snow,
    '610': snow,
    '611': wind,
    '612': wind,
    '621': snow,
    '622': snow,
    '623': snow,
    '700': haze,
    '711': haze,
    '721': haze,
    '731': haze,
    '741': haze,
    '751': haze,
    '800': clear,
    '801': clouds,
    '802': clouds,
    '803': cloudy,
    '804': cloudy,
    "900": unk,
  };

  const date = new Date();
  const day = date.getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[day];
  const month = date.getMonth() + 1;
  const dateNumber = date.getDate();
  const year = date.getFullYear();
  const fullDate = `${dayName}  ${dateNumber}/${month}/${year}`;

  const getWeather = async () => {
    const { data } = await axios(
      `${api.base}/daily?lat=${city.latitude}&lon=${city.longitude}&days=7&key=${api.key}`
    );
    setWeatherData(data);
  };

  useEffect(() => {
    getWeather();
    localStorage.setItem('theme', theme);
    // eslint-disable-next-line
  }, [city, theme]);



  const values = {
    city,
    setCity,
    weatherData,
    setWeatherData,
    theme,
    setTheme,
    fullDate,
    days,
    icons,
  };


  return (
    <MainContext.Provider value={values}>
      {children}
    </MainContext.Provider>
  );
};


const useMainContext = () => useContext(MainContext);
export { useMainContext, MainContextProvider };