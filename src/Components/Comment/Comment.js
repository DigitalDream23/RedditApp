import React from "react";
import {MarkdownText} from './MarkdownText';

export const Comment =({comment}) => {
return(
    <div className="comment">
        <p className="comment-author">{comment.author}</p>
        <div>
        <MarkdownText>
            {comment.body}
            {comment.reply}
        </MarkdownText>
        </div>
    </div>
)
};