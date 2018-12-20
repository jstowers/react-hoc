import { CHANGE_AUTH } from '../actions/types';

// true = user logged in
// false = user logged out
export default function(state = false, action) {
    switch (action.type) {
        
        case CHANGE_AUTH:
            return action.payload;

        default:
            return state;
    }
}