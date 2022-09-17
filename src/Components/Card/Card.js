import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Card = ({post}) =>{
    const dispatch = useDispatch();
    let {subreddit} = useParams();
    const showSubreddit = subreddit === 'popular';



return(
    <article>
    <div className="reddit-post">
        <a className="subreddit-link">{post.subreddit}</a>
    </div>
    <div className="post-title">{post.title}</div>
    </article>
)

}