import React from 'react';
import { useMainContext } from '../../../../context/MainContext';

function WeeklyForecast() {
  const { weatherData, icons, days } = useMainContext();

  return (
    <div className='weekly p-3 p-lg-4 d-flex flex-column container'>
      <h4 className='title col-12 mb-3'>Weekly Forecast</h4>
      <div className='d-flex flex-wrap justify-content-between flex-column flex-lg-row'>
        {weatherData.data !== undefined && weatherData.data.map((day, index) => {
          return (
            <section className='box weather d-flex flex-column align-items-center p-3 justify-content-between' key={index}>
              <span className='day innerBox mb-2 w-100 text-center'>
                {days[new Date(day.valid_date).getDay()]}
              </span>
              <span className='mb-2'>
                <img src={icons[day.weather.code]} alt='weather' />
              </span>
              <span className='innerBox w-100 text-center'>
                <span>{day.min_temp} °C</span>
              </span>
              <span className=' innerBox mt-2 w-100 text-center'>
                <span>{day.max_temp} °C</span>
              </span>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyForecast;