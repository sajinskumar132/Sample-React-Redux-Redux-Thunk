import React from 'react';
import {useSelector} from 'react-redux'
export default function ReducerWrapper() {
    const counter=useSelector(state => state.Counter.counter)
    const posts=useSelector(state=> state.Posts.Posts)
  return {counter,posts};
}
