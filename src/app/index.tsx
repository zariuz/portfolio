import React from 'react';

import './App.css';
import TodoList from 'components/todoList/TodoList';
import AddTodo from 'components/todoList/AddTodo';

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
