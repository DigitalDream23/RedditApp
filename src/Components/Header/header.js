import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, fetchSearchResults } from "../Reddit/RedditSlice";
import './header.css';



export const Header=({visibleSubMenu, setVisibility})=>{

const dispatch = useDispatch();
const searchTerm = useSelector(state=>state.reddit.searchTerm)
const posts = useSelector(state=>state.reddit.posts)
console.log(searchTerm)

const onHandleSubmit=(e)=>{
    document.querySelectorAll('input').value=''
    e.preventDefault();
    dispatch(fetchSearchResults(searchTerm));
}


return(
    <div className="Header">
        <div className="logo-name">
        <img 
        src='/Resources/reddit-logo.svg'
        alt="Reddit-Logo"
        id="logo">
        </img>
        <p id="logo-text">
            mini
        </p>
        <img src="/Resources/default-reddit-logo.png" alt="reddit-logo"
        id="logo-mini"/>
        </div>
        <div className="toggle-subreddit-buttons" onClick={()=>{setVisibility()}}>
            {!visibleSubMenu ? <img src="/Resources/burger-menu.svg" alt="Display Subreddit Menu"/> : <img src="/Resources/close-icon.svg" alt="Hide Subreddit Menu"/>}
        </div>
        <form onSubmit={onHandleSubmit} className="search-input"
        >
            <label>
                <img src='/Resources/search-icon.svg'/>
            </label>
            <input 
            value={searchTerm}
            placeholder="Search Reddit"
            onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
            id="search-bar"
            />
        </form>
    </div>
)
}

export default Header;