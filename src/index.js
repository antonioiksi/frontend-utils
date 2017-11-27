import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import 'react-bootstrap-table/dist/react-bootstrap-table.min';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
