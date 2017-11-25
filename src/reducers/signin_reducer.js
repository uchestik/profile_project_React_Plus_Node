export default function(state={}, action){
    switch(action.type){
        case 'GET_SIGNIN':
            return{...state,signin:action.payload}
        case 'SEND_MESSAGE':
            return{...state, messagePost:action.payload}
        case 'POST_COMMENT':
            return{...state, commentPost:action.payload}
        case 'ADD_LIKE':
            return{...state, addLike:action.payload}
        default:
            return state
    }
}