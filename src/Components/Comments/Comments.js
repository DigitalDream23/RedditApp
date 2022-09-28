import React, {useCallback, useEffect, useState} from "react";
import {Comment} from './Comment/Comment';


export const Comments =({comments}) => {
return(
    <div className="comments">
        {comments.map((comment, id)=>{
            return <Comment key={id} comment={comment}/>
        })
        }
    </div>
)
};