import Dropdown from "./DropCities";
import { useMainContext } from '../../../../context/MainContext';
import ButtonGroup from "./ButtonGroup";

function Navbar() {
  const { weatherData, fullDate } = useMainContext();

  return (
    <div className="navbar flex-column flex-lg-row p-3 p-lg-4 container" >
      <section className="themeBtn day col-lg-6 d-flex justify-content-between px-4 mb-3 mb-lg-0 col-12">
        <span className="col-6">
          {weatherData.city_name} / TR
        </span>
        <span className="col-6 text-end">
          {fullDate}
        </span>
      </section>
      <section className="col-lg-6 d-flex justify-content-between col-12">
        <section className="ms-0 ms-lg-3">
          <Dropdown />
        </section>
        <section className="ms-3 d-flex justify-content-between justify-content-lg-end">
          <ButtonGroup />
        </section>
      </section>
    </div >
  );
}

export default Navbar;