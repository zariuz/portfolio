import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import AddTodo from 'components/todoList/AddTodo';

function App() {
  return (
    <div>
      <AddTodo />
    </div>
  );
}

export default App;
