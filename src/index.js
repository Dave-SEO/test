import React from 'react';
import {render} from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux'
import store from './store'

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
