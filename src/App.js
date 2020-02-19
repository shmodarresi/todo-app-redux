import React from 'react';
import TodoList from './components/TodoList';

import './assets/style.css';

const App =() =>{
  return (
    <div className="main-container">
      <h1>React To-Do</h1>
      <TodoList />
    </div>
  );
}

export default App;
