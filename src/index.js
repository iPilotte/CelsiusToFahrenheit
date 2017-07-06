import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import './asset/css/bootstrap.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
