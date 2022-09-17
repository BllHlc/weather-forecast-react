import React from 'react';
import sunPng from "../../../../../icons/sun-96.png";
import moonPng from "../../../../../icons/new-moon-96 (1).png";
import { BsGithub } from "react-icons/bs";
import { useMainContext } from "../../../../../context/MainContext";

function ButtonGroup() {
  const { theme, setTheme } = useMainContext();

  return (
    <>
      <span className="themeBtn ">
        <img
          src={theme === "dark" ? sunPng : moonPng}
          alt="theme"
          onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); }}
        />
      </span>
      <a className="themeBtn ms-3" href="https://github.com/BllHlc">
        <BsGithub />
      </a>
    </>
  );
}

export default ButtonGroup;