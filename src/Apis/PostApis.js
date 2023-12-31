import axios from 'axios'
import {GetAllPosts } from '../Store/postsStore'
export const GetPosts=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response)=>{
            dispatch(GetAllPosts(response.data))
        }).catch((error)=>{
            console.log(error)
        })
    }
   
}