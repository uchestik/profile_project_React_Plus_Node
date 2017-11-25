import React from 'react';
import Moment from 'react-moment';
import CommentForm from '../containers/commentForm';
import Comments from './home_components/comments';
import Fade from 'react-reveal/Fade';

const posts = (props)=>{
    let item = props.signin_posts;

    return(
        <Fade up>
        <div className='message_box' key={item._id}>
            <div className='sender'>
                <div className='sender_name'>{item.firstName} {item.lastName}</div>
                <div className='sender_position'><span className='position'>{item.position}</span> at <span className='company'>{item.companyName}</span></div>
                <div className='post-date'><Moment fromNow>{item.created}</Moment></div>
            </div>
            <div className='sender_message'>{item.message}</div>
            <div className='likes' >
                    <span className='like_number'>{item.like} Likes</span> {item.comments.length} Comments
            </div>
            < CommentForm  key={item._id} likes={item.like} function={props.function} id={item._id} form={item._id} />
            <br/>
            <div>
            < Comments comments={item.comments} />
            </div>
        </div>
        </Fade>
    )
}






const Individual_Signin = (props)=>{
    return(
        <div>
           {posts(props)}
        </div>
    )
}

export default Individual_Signin;


