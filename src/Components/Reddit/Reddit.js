import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost, fetchSubredditPosts, fetchSearchResults, setSearchTerm} from './RedditSlice';
import { Card } from "../Card/Card";
import './Reddit.css'


const Reddit = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.reddit.posts);
    const currentSubreddit = useSelector(state => state.reddit.currentSubreddit);
    const comments = useSelector(state=>state.reddit.comments)
    const isLoading = useSelector(state=>state.reddit.isLoading)
    const hasError = useSelector(state=>state.reddit.hasError)
    const searchTerm = useSelector(state=>state.reddit.searchTerm)

useEffect(()=>{
    dispatch(fetchSubredditPosts(currentSubreddit))
}, [currentSubreddit])
console.log(posts)

const onHandleSubmit=(e)=>{
    dispatch(fetchSearchResults(searchTerm));
    setSearchTerm(null);
}


if(isLoading){
    return <h1 className="loading-logo">Loading...</h1>
}if(hasError){
    return <h1 className="tryagain-logo">Try Again</h1>
}
else {
    return(
        <div className="posts-content">
            <h2 className="subreddit-source-title">{currentSubreddit}</h2>
            <div className="posts">
               {posts ? <>{posts.map((post)=>{
                    return <Card key={post.id} 
                                post={post}
                                className="post" 
                            />
                })}</> : <p>No Posts</p>}
            </div>
        </div>
    )
}}


export default Reddit;