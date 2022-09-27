import React from "react";
import {Comment} from './Comment/Comment';

export const Comments =({comments}) => {



return(
    <div className="comments">
        {comments.map((comment, id)=>{
            return <Comment comment={comment} key={id}/>
        })}
    </div>
)
};