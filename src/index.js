import React,{StrictMode} from 'react';
import {render} from 'react-dom';
import TodoList from './TodoList';
render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
  document.getElementById('root')
);
