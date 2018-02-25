import './assets/css/reset.less';
import React from 'react';
import ReactDOM from 'react-dom';
import './mock/mock';

import { Route,HashRouter as Router,Link } from 'react-router-dom';

import App from './components/App';

ReactDOM.render(
    <Router>
      
           <Route path='/' component={App} exact/>
      
    </Router>,
    document.getElementById('app')
);