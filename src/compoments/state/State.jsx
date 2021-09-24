import React from 'react';
import { useSelector } from 'react-redux';
import './State.module.scss';

function State() {
    const supplies = useSelector(state => state.supplies);
    const distance = useSelector(state => state.distance);
    const days = useSelector(state => state.days);
    const cash = useSelector(state => state.cash);

    return (
        <>
        <ul>
            {supplies < 20 ? <li style={{backgroundColor: 'rgb(255, 100, 100)'}}>Supplies: {supplies}</li> : <li>Supplies: {supplies}</li>}
            {distance > 30 ? <li style={{backgroundColor: 'rgb(100, 100, 253)'}}>Distance: {distance}</li> : <li>Distance: {distance}</li>}
            <li>Days: {days}</li>
            {cash <= 0 ? <li style={{backgroundColor: 'red'}}>Cash: {cash}</li> : <li>Cash: {cash}</li>}
            
        </ul>
        </>
    )
}

export default State;
