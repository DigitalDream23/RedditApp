import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost, setSearchTerm, clearSearchTerm, fetchSubredditPosts} from './RedditSlice';
import { Card } from "../Card/Card";


const Reddit = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.reddit.posts);
    const currentSubreddit = useSelector(state => state.reddit.currentSubreddit);

useEffect(()=>{
    dispatch(fetchSubredditPosts(currentSubreddit))
}, [currentSubreddit])

    return(
        <div>
            <h2>Posts</h2>
            <div>
                {posts.map(post=>{
                    return <Card key={post.id} post={post}/>
                })}
            </div>
        </div>
    )
}


export default Reddit;