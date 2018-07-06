import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Index = () => {
    //handle all the rendering and routing network here
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
