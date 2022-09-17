import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import  { setCurrentSubreddit } from "../Reddit/RedditSlice"
import { fetchSubreddits, selectSubreddits } from "./SubRedditsSlice";




const SubReddits = () =>{
    const dispatch = useDispatch();
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const currentSubreddit = useSelector(state => state.reddit.currentSubreddit);
    const isLoading = useSelector(state => state.subreddits.isLoading);
    const error = useSelector(state => state.subreddits.error);
    
    useEffect(()=>{
        dispatch(fetchSubreddits())
    },[currentSubreddit]);

return(
    <div>
    <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              currentSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setCurrentSubreddit(subreddit.display_name))}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
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

