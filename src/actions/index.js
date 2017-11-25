import axios from 'axios';

const SigninUrl = '/signin';



export function getSignIn(){
    // const request = fetch(SigninUrl, {method:'GET'})
    // .then(res=>res.json())

    const request = axios.get(SigninUrl)
    .then(res=>res.json())

    return {
        type:'GET_SIGNIN',
        payload: request
        
    }
}

export function sendMessage(values,cb){
    // const request = fetch(SigninUrl, {
    //     method:'POST',
    //     headers:{
    //         'Accept':"application/x-www-form-urlencoded",
    //         'Content-Type':"application/json"
    //     },
    //     body:JSON.stringify(values)
    // }).then(()=>cb());

    const request = axios.post(SigninUrl,values)
    .then(()=>cb());

    

    return{
        type:'SEND_MESSAGE',
        payload:'Message Sent'
    }
}

export function PostComment(values,id,cb){
    // const request= axios.post(`${SigninUrl}/${id}/comment`, values)
    // .then(()=>cb());

    const request = fetch(`${SigninUrl}/${id}/comment`, {
        method:'POST',
        headers:{
            'Accept':"application/x-www-form-urlencoded",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());


    return{
        type:'POST_COMMENT',
        payload:'Comment Posted'
    }
}

export function addLikes(value,id,cb){
    const request = fetch(`${SigninUrl}/edit/${id}`,{
        method:'PUT',
        headers:{
            'Accept':"application/x-www-form-urlencoded",
            'Content-Type':"application/json"
        },
        body:JSON.stringify({like:value})
    }).then(()=>cb());

    return{
        type:'ADD_LIKE',
        payload:'like added'
    }
}