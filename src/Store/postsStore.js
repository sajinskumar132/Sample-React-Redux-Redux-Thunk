import {createSlice} from '@reduxjs/toolkit'
const PostSlice=createSlice({
    name:"Posts",
    initialState:{
        Posts:[]
    },
    reducers:{
        GetAllPosts:(state,action)=>{
            state.Posts=action.payload
        }
    }
})

export const {GetAllPosts} = PostSlice.actions

export default PostSlice.reducer