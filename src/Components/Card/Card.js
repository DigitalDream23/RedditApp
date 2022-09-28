import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './Card.css';
import {selectTargetSubredditIcon} from '../SubReddits/SubRedditsSlice';
import { fetchPostComments } from "../Reddit/RedditSlice";
import {Comments} from '../Comments/Comments';




export const Card = ({post}) =>{
    const dispatch = useDispatch();
    const currentSubreddit = useSelector(state => state.reddit.currentSubreddit)
    const subreddits = useSelector(state=>state.subreddits.subreddits);
    const icon = useSelector((state) =>
    selectTargetSubredditIcon(state, currentSubreddit));
    const [comments, setComments] = useState(null)




const onToggleCommments =
        async (id) => {
        const response = await fetch(
            `https://www.reddit.com/comments/${id}.json`
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        const comments = jsonResponse[1].data.children.map(comment=> comment.data)
        console.log(comments);
        setComments(comments);
      };

    const onClear=()=>{
        setComments(null)
    };



return(
    <article className="reddit-post">
    <div className="subreddit-source">
        <div className="source-align-left">
       <img src={ 
                icon ||
                '/Resources/default-reddit-logo.png'
                }
                className="subreddit-avatar"
                />
        <a className="subreddit-link">
        {post.subreddit}
        </a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;posted by&nbsp;&nbsp;</p>
        {post.author}
        </div>
    </div>
    <div className="post-title">{post.title}
    {post.thumbnail && post.post_hint === 'image' ? <div className="media-container"><img src={post.url} className="post-media"/></div> : ''}
    {post.post_hint === 'hosted:video' ? 
    <div className="media-container">
    <video controls className="post-video">
        <source src={post.media.reddit_video.fallback_url} type="video/mp4"/>
        
    </video></div> : '' }
    </div>
    <div className="comment-list">
       {comments ? <div><button onClick={()=>{onClear()}} className="clear-button">clear</button><Comments comments={comments}/></div> : <button 
    className="comments-button"
    onClick={()=>onToggleCommments(post.id)}
    >Comments<div className="line-divide"> | </div> {post.num_comments}
    </button>}
       
    </div>
    </article>
)

}