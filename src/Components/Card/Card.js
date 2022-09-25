import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Card.css';
import {selectTargetSubredditIcon} from '../SubReddits/SubRedditsSlice';
import { Comment } from "../Comment/Comment";
import { fetchPostComments } from "../Reddit/RedditSlice";



export const Card = ({post, onToggleComments}) =>{
    const dispatch = useDispatch();
    const currentSubreddit = useSelector(state =>state.reddit.currentSubreddit)
    const subreddits = useSelector(state=>state.subreddits.subreddits);
    const icon = useSelector((state) =>
    selectTargetSubredditIcon(state, currentSubreddit));
    const comments = useSelector(state=>state.reddit.comments)

  


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
    <button 
    className="comments-button"
    onClick={()=>onToggleComments(post.id)}
    >Comments<div className="line-divide"> | </div> {post.num_comments}
    </button>
    <div className="comment-list">
        {comments.map((comment)=>{
            return <div>{comment.author}</div>
        })}
    </div>
    </article>
)

}