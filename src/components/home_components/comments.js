import React from 'react';

import Individual_Comment from '../individual_comment';


const commentList = (props)=>{
    const comments = props.comments;
    if(comments){
        return comments.map((comment)=>{
            return(
                <div key={comment._id}>
                    <Individual_Comment individual_comment={comment} key={comment._id} />
                </div>
            )
        })
    }
}





const Comments = (props)=>{
    return (
        <div>
            {commentList(props)}
        </div>  
    )
}

export default Comments;