import React from 'react';
import PropTypes from 'prop-types';
import Nav from './pages/nav';
import Applist from './pages/applist';
import Mobile from './pages/mobile';

import {Route,Link} from 'react-router-dom'
import './app.less';


import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux'; 

import {reducers,initState} from '../redux/reducer';




const store = createStore(reducers, initState);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


class App extends React.Component{
  constructor(){
      super();
      this.state={};
  }
  componentDidMount(){
      
  }

  render(){
      return(
        <div className="container">
            <Nav></Nav>  
            <Provider store={store}>
                <div className="content">
                    <section className="app-main">
                        <Mobile></Mobile>
                    </section> 
                    <aside className="app-list">
                        <Applist></Applist>
                    </aside>     
                </div>
            </Provider>
            
        </div>
      )
  }
}
export default App;