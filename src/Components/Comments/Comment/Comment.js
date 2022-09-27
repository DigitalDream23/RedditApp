import React from "react";
import { MarkdownText } from "../MarkdownText";
import '../Comment/Comment.css'


export const Comment=({comment})=>{
return(

    <div className="comment">
        <div className="comment-author">
        <img
        src="/Resources/snoo-avatar-icon.png"
        className="user-avatar-image"
        />
        <p
        className="author-username"
        >{comment.author}</p>
        </div>
        <div className="comment-body">
        <MarkdownText body={comment.body}/>
        </div>
    </div>
)
}