import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from './state/counterSlice'

export default function SecondComponent() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
        <button onClick={()=>dispatch(incrementByAmount(10))}>Add 10</button>
        <h1>{count}</h1>
        </>
    );
}