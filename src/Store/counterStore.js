import {createSlice} from '@reduxjs/toolkit'

const CounterSlice=createSlice({
    name:"Counter",
    initialState:{
        counter:0
    },
    reducers:{
        IncrementCounter:(state)=>{
            state.counter=state.counter+1
        },
        DecrementCounter:(state)=>{
            state.counter=state.counter-1
        }
    }
})

export const {IncrementCounter,DecrementCounter}=CounterSlice.actions

export default CounterSlice.reducer