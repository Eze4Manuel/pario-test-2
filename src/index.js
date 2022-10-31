import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers/index";
import Boxcon from './container/box-container';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
  return (<Boxcon></Boxcon>)
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));