// December 16, 2018
// Sec. 3, Lec. 75
// Create HOC

import React, { Component } from 'react';

// exporting a function in this file
export default (ChildComponent) => {
    class ComposedComponent extends Component {
        render() {
            return (
                <ChildComponent />
            )
        }
    }
    return ComposedComponent;
}

/*
    Note: connect() and some other HOCs use a slightly different function signature
*/

/*
    Ex) in CommentBox.js, we import the requireAuth component

    define <CommentBox/>

    // call requireAuth function with <CommentBox/> as a component
    export default requireAuth(CommentBox)

*/