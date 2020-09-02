import React from 'react';

import './App.css';
import TodoList from 'components/todoList/TodoList';
import AddTodo from 'components/todoList/AddTodo';
import Footer from 'components/visibilityFilter/Footer';

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
