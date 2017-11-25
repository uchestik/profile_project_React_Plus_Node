import React from 'react';
import Moment from 'react-moment';
import Fade from 'react-reveal/Fade';

const Show_Comment = (props)=>{
    const comment = props.individual_comment;

    return(
        <div key={comment._id} className='individual_comment'>
            <div className='comment-author'>
                <span className='sender-name'>{comment.firstName}</span> with <span className='company'>{comment.companyName}</span> commented  <Moment fromNow>{comment.created}</Moment>
            </div>
            <div>
                {comment.comment}
            </div>
        </div>
    )
}

const Individual_Comment = (props)=>{
    return(
        <Fade up>
            {Show_Comment(props)}
        </Fade>
    )
}

export default Individual_Comment;


 