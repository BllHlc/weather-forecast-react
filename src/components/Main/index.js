import React from 'react';
import Content from './Container/İndex';
import { useMainContext } from '../../context/MainContext';

function Main() {
  const { theme } = useMainContext();

  return (
    <div className={`main ${theme}`}>
      <Content />
    </div>
  );
}

export default Main;      