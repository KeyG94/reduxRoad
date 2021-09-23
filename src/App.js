import React from 'react';
import { useSelector } from 'react-redux';
import Button from './compoments/button/Button';


function App() {
  const supplies = useSelector(state => state.supplies);
  const distance = useSelector(state => state.distance);
  const days = useSelector(state => state.days);
  const cash = useSelector(state => state.cash);
  

  return (
    <>
      <ul>
        <li>Supplies: {supplies}</li>
        <li>Distance: {distance}</li>
        <li>Days: {days}</li>
        <li>Cash: {cash}</li>
      </ul>
      <Button />
    </>
  );
}

export default App;
