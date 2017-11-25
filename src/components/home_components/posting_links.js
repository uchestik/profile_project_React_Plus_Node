import React from 'react';
import {Link} from 'react-router-dom';

const PostLinks = ()=>{
    return(
        <div className='postLinks text-center'>
            <Link className='signInFormLink' to={'/signinform'}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Post a nice message to Uchenna</Link>
        </div>
    )
}

export default PostLinks;