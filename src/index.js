import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import './services/httpAgent';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
