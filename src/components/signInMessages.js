import React from 'react';

import Individual_Signin from './individual_signin';

/* < Comments comments={item.comments} /> */

const showMessages = (props)=>{
    const items = props.signInMessages.signin
    if(items){
        return items.map((item)=>{
            return(
                <div>
                <Individual_Signin function={props.function} signin_posts={item} key={item._id} />
                </div>
            )
        })
    }
}


const Messages = (props)=>{

    return(
        <div >
        {showMessages(props)}
        </div>
    )
}

// class Messages extends Component{

//     componentDidMount(){
//         console.log(this.props);
//     }

//     render(){
//         return(
//             <div>one</div>
//         )
//     }
// }

export default Messages;