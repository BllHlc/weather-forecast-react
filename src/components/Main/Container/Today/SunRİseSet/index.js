import { useMainContext } from '../../../../../context/MainContext';
import sunrise from '../../../../../icons/sunrise-96.png';
import sunset from '../../../../../icons/sunset-96.png';

function SunRiseSet() {
  const { weatherData } = useMainContext();
  const convertTime = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
  };

  return (
    <div>
      <h6 className='innerBox text-center w-100'>Sunrise & Sunset</h6>
      <div className='innerBox p-3 d-flex flex-column align-items-center'>
        <section className='d-flex align-items-center mb-3'>
          <img src={sunrise} alt='weather' />
          <span className='time d-inline-flex flex-column ms-3'>
            {weatherData.data !== undefined && convertTime(weatherData.data[0].sunrise_ts)}
          </span>
        </section>
        <section className='d-flex align-items-center'>
          <img src={sunset} alt='weather' />
          <span className='time d-inline-flex flex-column ms-3'>
            {weatherData.data !== undefined && convertTime(weatherData.data[0].sunset_ts)}
          </span>
        </section>
      </div>
    </div>
  );
}

export default SunRiseSet;