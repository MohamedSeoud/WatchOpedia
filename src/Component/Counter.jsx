import { useState } from 'react';
import classes from './Counter.module.css';

const Counter = ()=>{
    const[count,setCount] = useState(0);

    const onAddHandler= ()=>{
        setCount((prev)=>{
            return prev+1;
        })
    }

    const onRemoveHandler= ()=>{
        setCount((prev)=>{
            return prev-1;
        })}


    return(
        <div className={classes.box}>
            <p className={classes.fun}>Fun Counter</p>
            <div className={classes.pos}>
            <button className={classes.btn1} onClick={onAddHandler}>+1</button>
            <button className={classes.btn2} onClick={onRemoveHandler}>-1</button>\
            </div>
            <p className={classes.counter}>Counter: {count}</p>
        </div>
    )

}
export default Counter;