// Root.js
// Sec. 2, Lec. 43

// Create and export component
// Creates <Provider/> tag and Redux store
// Can swap out the components that are rendered inside the <Provider />

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// props.children allows us to take this component and wrap other components

export default props => {
    return (
        <Provider store={createStore(reducers, {})}>
            {props.children}
        </Provider>
    );  
}