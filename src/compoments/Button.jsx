import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gather, travel, buy, sell } from '../actions';

function Button() {
    const supplies = useSelector(state => state.supplies);
    const cash = useSelector(state => state.cash);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <label>Gather: </label>
                <button onClick={() => dispatch(gather())}>Gather</button>
                <span> Cost: 1 day</span>
            </div>
            <div>
                <label>Travel: </label>
                {supplies > 0 ? <button onClick={() => dispatch(travel(1))}>Travel</button> : <button onClick={() => dispatch(travel(1))} style={{color: 'red'}}>Travel (not enough supplies)</button>}
                <span> Cost -20 supplies & +1 day</span>
            </div>
            <div>
                <label>Buy 25 supplies: </label>
                {cash >= 0 ? <button onClick={() => dispatch(buy())}>Buy</button> : <button onClick={() => dispatch(buy())} style={{color: 'red'}}>Buy (not enough cash)</button> }
                <span> Cost 15 cash</span>
            </div>
            <div>
                <label>Sell supplies +5 cash</label>
                {supplies > 20 ? <button onClick={() => dispatch(sell())}>Sell supplies for cash</button> : <button onClick={() => dispatch(sell())} style={{color: 'red'}}>Sell (not enough supplies)</button>}
                <span> Cost 20 supplies</span>
            </div>
        </>
    )
}

export default Button
