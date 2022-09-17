import React from 'react';
import Navbar from './Navbar/index';
import Today from './Today/index';
import WeeklyForecast from './WeeklyForecast';

function Content() {

  return (
    <div className='container'>
      <Navbar />
      <Today />
      <WeeklyForecast />
    </div>
  );
}

export default Content;