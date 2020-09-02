import React from 'react';
import { useDispatch } from 'react-redux';

import TodoList from 'components/todoList/TodoList';
import AddTodo from 'components/todoList/AddTodo';
import Footer from 'components/visibilityFilter/Footer';
import { loadTodos, createTodoList } from 'components/todoList/todoSlice';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.location.pathname === '/') {
      dispatch(createTodoList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);

  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}
