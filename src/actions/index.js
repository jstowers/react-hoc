import axios from 'axios';
import { 
    SAVE_COMMENT,
    FETCH_COMMENTS, 
    CHANGE_AUTH, 
} from './types';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
    const url = 'http://jsonplaceholder.typicode.com/comments';

    return {
        type: FETCH_COMMENTS,
        payload: axios.get(url)
            // axios.get(url)
            //     .then(response => {
            //         return response;
            //     })
            //     .then(data => {
            //         return data;
            //     })
    };
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}