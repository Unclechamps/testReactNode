import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import Cart from './components/Cart'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route path = '/add-movie' component = {AddMovie} />
        <Route path = '/cart' component = {Cart} />
        <Route path = '/' component = {MovieList} />
      </Switch>
    </App>
  </Provider>
</BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
