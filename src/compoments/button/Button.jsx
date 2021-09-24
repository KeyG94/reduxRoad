import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gather, travel, buy, sell } from '../../actions';
import './Button.module.scss';

function Button() {
    const supplies = useSelector(state => state.supplies);
    const cash = useSelector(state => state.cash);
    const dispatch = useDispatch();

    return (
        <>
            <div className="random">
                <div>
                    <label className="label">Gather: </label>
                    <span>Cost: 1 day </span>
                    <button onClick={() => dispatch(gather())}>Gather</button>
                </div>
                <div>
                    <label>Travel: </label>
                    <span>Cost -20 supplies & +1 day </span>
                    {supplies > 0 ? <button onClick={() => dispatch(travel(1))}>Travel</button> : <button onClick={() => dispatch(travel(1))} style={{color: 'red'}}>Travel (not enough supplies)</button>}
                </div>
                <div>
                    <label>Buy 25 supplies: </label>
                    <span>Cost 15 cash </span>
                    {cash >= 0 ? <button onClick={() => dispatch(buy())}>Buy</button> : <button onClick={() => dispatch(buy())} style={{color: 'red'}}>Buy (not enough cash)</button> }
                </div>
                <div>
                    <label>Sell supplies +5 cash</label>
                    <span>Cost 20 supplies </span>
                    {supplies > 20 ? <button onClick={() => dispatch(sell())}>Sell supplies for cash</button> : <button onClick={() => dispatch(sell())} style={{color: 'red'}}>Sell (not enough supplies)</button>}
                </div>
            </div>
        </>
    )
}

export default Button;
