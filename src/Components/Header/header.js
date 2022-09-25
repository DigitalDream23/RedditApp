import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, clearSearchTerm, fetchSearchResults } from "../Reddit/RedditSlice";
import './header.css';



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
        <div className="logo-name">
        <img 
        src='https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png'
        alt="Reddit-Logo"
        id="logo"></img>
        <p>mini</p>
        </div>
        <form onSubmit={onHandleSubmit} className="search-input"
        >
            <label>
                <img src='/Resources/search-icon.svg'/>
            </label>
            <input 
            placeholder="Search Reddit"
            onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
            id="search-bar"
            />
            <button onClick={()=> dispatch(clearSearchTerm())}>Clear</button>
            <button type="submitt" id="submit-button" onClick={onHandleSubmit}>Submit</button>
        </form>
        
    </div>
)
}

export default Header;