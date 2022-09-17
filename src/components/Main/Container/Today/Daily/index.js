import React from 'react';
import { useMainContext } from '../../../../../context/MainContext';


function Daily() {
  const { weatherData, icons } = useMainContext();

  return (
    <>
      <span className='mb-2'>
        {weatherData.data !== undefined && <img src={icons[weatherData.data[0].weather.code]} alt='weather' />}
      </span>
      <span className='innerBox'>
        {weatherData.data !== undefined &&
          <span>{weatherData.data[0].temp} °C</span>
        }
      </span>
      <span className='description innerBox mt-2'>
        {weatherData.data !== undefined && weatherData.data[0].weather.description}
      </span>
    </>
  );
}

export default Daily;