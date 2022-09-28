import React from "react";
import '../Comment.css'


export const Comment=({comment})=>{
return(

    <div className="comment">
        <div className="comment-author">
        <img
        src="/Resources/snoo-avatar-icon.png"
        className="user-avatar-image" alt="avatar-icon"
        />
        <p
        className="author-username"
        >{comment.author}</p>
        </div>
        <div className="comment-body">
            body={comment.body}
        </div>
    </div>
)
}