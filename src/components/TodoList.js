// TodoList.js

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
