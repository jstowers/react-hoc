import React from 'react';
import ReactDOM from 'react-dom';
// tells React Router what content to show
// based on the URL the user is currently looking at
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import App from './components/App';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);
