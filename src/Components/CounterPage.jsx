import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { DecrementCounter, IncrementCounter } from '../Store/counterStore';
import { GetPosts } from '../Apis/PostApis';
import ReducerWrapper from '../Store/ReducersWrapper'
const CounterPage = () => {
    const {counter,posts}=ReducerWrapper()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetPosts())
    },[dispatch])
    console.log(posts)
    return (
        <div>
            <h1>Counter</h1>
            {counter}
            <button onClick={()=>dispatch(IncrementCounter())}>Increment</button>
            <button onClick={()=>dispatch(DecrementCounter())}>Decrmenent</button>
        </div>
    );
}
export default CounterPage;
