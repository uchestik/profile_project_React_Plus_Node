import { combineReducers } from 'redux';
import signIn from './signin_reducer';
import references from './references_reducer';
import { reducer as formReducer } from 'redux-form';


const rootreducer = combineReducers({
    signIn,
    references,
    form:formReducer
})

export default rootreducer;