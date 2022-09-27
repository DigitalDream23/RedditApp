import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubredditPosts} from './RedditSlice';
import { Card } from "../Card/Card";
import './Reddit.css'


const Reddit = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.reddit.posts);
    const currentSubreddit = useSelector(state => state.reddit.currentSubreddit);
    const comments = useSelector(state=>state.reddit.comments)


useEffect(()=>{
    dispatch(fetchSubredditPosts(currentSubreddit))
}, [currentSubreddit])
console.log(posts)



    return(
        <div className="posts-content">
            <h2 className="subreddit-source-title">{currentSubreddit}</h2>
            <div className="posts">
                {posts.map((post)=>{
                    return <Card key={post.id} 
                                post={post}
                                className="post" 
                            />
                })}
            </div>
        </div>
    )
}


export default Reddit;