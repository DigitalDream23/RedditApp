import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import  { setCurrentSubreddit } from "../Reddit/RedditSlice"
import { fetchSubreddits, selectSubreddits } from "./SubRedditsSlice";
import './SubReddits.css';




const SubReddits = ({visibleSubMenu, setVisibleSubMenu}) =>{
    const dispatch = useDispatch();
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const currentSubreddit = useSelector(state => state.reddit.currentSubreddit);
    const isLoading = useSelector(state => state.subreddits.isLoading);
    const error = useSelector(state => state.subreddits.error);
    const[width, setWidth] = useState(window.innerWidth)
    
    useEffect(()=>{
        dispatch(fetchSubreddits())
    },[dispatch]);


    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
    
   
  
return(
    <div className="subreddits-section">
    <h2 className="subreddits-source-title">Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
            currentSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              className={subreddit.display_name === currentSubreddit ? 'current-subreddit' : 'subreddit-items'}
              type="button"
              onClick={() => dispatch(setCurrentSubreddit(subreddit.display_name))}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://www.redditinc.com/assets/images/site/reddit-logo.png`
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
      </div>
    )
}



export default SubReddits;

