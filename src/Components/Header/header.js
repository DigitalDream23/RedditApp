import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, clearSearchTerm, fetchSearchResults } from "../Reddit/RedditSlice";



export const Header=()=>{

const dispatch = useDispatch();
const searchTerm = useSelector(state=>state.reddit.searchTerm)
const posts = useSelector(state=>state.reddit.posts)
console.log(searchTerm)

const onHandleSubmit=(e)=>{
    e.preventDefault();
    dispatch(fetchSearchResults(searchTerm));
}

return(
    <div className="Header">
        <img></img>
        <form onSubmit={onHandleSubmit}>
            <input placeholder="Enter Search"onChange={(e)=>dispatch(setSearchTerm(e.target.value))}/>
            <button onClick={()=> dispatch(clearSearchTerm())}>Clear</button>
            <button type="submitt" id="submit-button" onClick={onHandleSubmit}>Submit</button>
        </form>
        
    </div>
)
}

export default Header;