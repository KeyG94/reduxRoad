import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gather, travel, buy, sell } from '../../actions';
import styles from './Button.module.scss';

function Button() {
    const supplies = useSelector(state => state.supplies);
    const cash = useSelector(state => state.cash);
    const dispatch = useDispatch();

    return ( 
        <div className={styles.container}>
            <div className={styles.actionContainer}>
                <label className={styles.label}>Gather: </label>
                <span>Cost: 1 day </span>
                <button onClick={() => dispatch(gather())} className={styles.btn}>Gather</button>
            </div>
            <div className={styles.actionContainer}>
                <label className={styles.label}>Travel: </label>
                <span>Cost -20 supplies & +1 day </span>
                {supplies > 0 ? <button onClick={() => dispatch(travel(1))} className={styles.btn}>Travel</button> : <button onClick={() => dispatch(travel(1))} style={{color: 'red'}} className={styles.btn}>Travel (not enough supplies)</button>}
            </div>
            <div className={styles.actionContainer}>
                <label className={styles.label}>Buy 25 supplies: </label>
                <span>Cost 15 cash </span>
                {cash >= 0 ? <button onClick={() => dispatch(buy())} className={styles.btn}>Buy</button> : <button onClick={() => dispatch(buy())} style={{color: 'red'}} className={styles.btn}>Buy (not enough cash)</button> }
            </div>
            <div className={styles.actionContainer}>
                <label className={styles.label}>Sell supplies for +5 cash: </label>
                <span>Cost 20 supplies </span>
                {supplies > 20 ? <button onClick={() => dispatch(sell())} className={styles.btn}>Sell</button> : <button onClick={() => dispatch(sell())} style={{color: 'red'}} className={styles.btn}>Sell (not enough supplies)</button>}
            </div>
        </div>
    )
}

export default Button;
