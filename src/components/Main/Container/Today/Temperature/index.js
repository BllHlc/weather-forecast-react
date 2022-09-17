import { useMainContext } from '../../../../../context/MainContext';
import maxTemp from '../../../../../icons/thermometer-warmer.svg';
import minTemp from '../../../../../icons/thermometer-colder.svg';
import thermometer from '../../../../../icons/thermometer-96 (1).png';
import hygrometer from '../../../../../icons/hygrometer-96.png';

function Temperature() {
  const { weatherData } = useMainContext();

  return (
    <>
      <section className='d-flex flex-column mb-2 mb-md-0 justify-content-between container p-0 px-lg-2'>
        <section className='innerBox d-inline-flex  align-items-center mb-2 mb-lg-0'>
          <img src={maxTemp} alt='weather' />
          <span className='d-inline-flex flex-column'>
            <span>Max:</span>
            {weatherData.data !== undefined && weatherData.data[0].max_temp}°
          </span>
        </section>
        <section className='innerBox d-inline-flex align-items-center'>
          <img src={minTemp} alt='weather' />
          <span className='d-inline-flex flex-column'>
            <span>Min:</span>
            {weatherData.data !== undefined && weatherData.data[0].min_temp}°
          </span>
        </section>
      </section>
      <section className='feels d-flex flex-column justify-content-between container px-0 px-md-2'>
        <section className='innerBox d-inline-flex  align-items-center mb-2 mb-lg-0'>
          <img src={thermometer} alt='weather' />
          <span className='d-flex flex-column ms-2 text-center'>
            <span>Feels Like</span>
            {weatherData.data !== undefined && weatherData.data[0].temp}°
          </span>
        </section>
        <section className='innerBox d-inline-flex  align-items-center'>
          <img src={hygrometer} alt='weather' />
          <span className='d-flex flex-column ms-2 text-center'>
            <span>Humidity</span>
            {weatherData.data !== undefined && weatherData.data[0].rh}%
          </span>
        </section>
      </section>
    </>
  );
}

export default Temperature;