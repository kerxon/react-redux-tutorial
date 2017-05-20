'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,browserHistory,IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers/index';

import Main from './main';
import BooksList from './components/pages/BooksList';
import Cart from './components/pages/BooksList';
import BooksForm from './components/pages/BooksForm';

const middleware = applyMiddleware(createLogger());
const store = createStore(reducers, middleware);
const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList}></IndexRoute>
        <Route path="/admin" component={BooksList}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(Routes, document.getElementById('app'));
