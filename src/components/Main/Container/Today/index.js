import Daily from './Daily';
import SunRiseSet from './SunRİseSet';
import Temperature from './Temperature';

function Today() {
  return (
    <div className='today p-3 p-lg-4 d-flex flex-column container'>
      <h4 className='title col-12 mb-3'>Today</h4>
      <div className='d-flex flex-column flex-lg-row'>
        <section className='box weather d-flex flex-column align-items-center p-3 justify-content-between col-lg-3 mb-3 mb-lg-0'>
          <Daily />
        </section>
        <section className='box temp d-flex p-3 flex-column flex-md-row justify-content-between mx-lg-2 col-lg-5 mb-3 mb-lg-0'>
          <Temperature />
        </section>
        <section className='box sun d-flex flex-column p-3 justify-content-between w-100'>
          <SunRiseSet />
        </section>
      </div>
    </div>
  );
}

export default Today;