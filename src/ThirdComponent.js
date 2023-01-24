import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { multiplyByAmount } from './state/counterSlice'

export default function ThirdComponent() {

    const count = useSelector((state) => state.counter.multiple)
    const dispatch = useDispatch()

    return (
        <>
        <button onClick={()=>dispatch(multiplyByAmount(111))}>Multiply 111</button>
        
        <button onClick={()=>dispatch(multiplyByAmount(433))}>Multiply 433</button>
        <h1>Multiplied Value {count}</h1>
        </>
    );
}