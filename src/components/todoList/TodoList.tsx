import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import { RootState } from 'redux/rootReducer';

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
