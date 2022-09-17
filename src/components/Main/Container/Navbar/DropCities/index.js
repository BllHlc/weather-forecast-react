import React from 'react';
import citiesJSON from '../../../../../data/cities.json';
import { useState } from 'react';
import { useMainContext } from '../../../../../context/MainContext';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function DropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { weatherData, setCity, city } = useMainContext();
  console.log(weatherData);

  return (
    <>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
      // direction={direction}
      >
        <DropdownToggle caret>
          {city.name}
        </DropdownToggle>
        <DropdownMenu
          dark
        >
          <div className='dropDown'>
            {citiesJSON.map((city) => (
              <DropdownItem
                key={city.id}
                onClick={() => {
                  setCity(city);
                }}
              >
                {city.name}
              </DropdownItem>
            ))}
          </div>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default DropDown;