import React, { useState } from 'react';
// import TodoList from '../components/TodoList'
import TodoList from '../components/TodoList';

import './App.css'

function App() {
  // Step 3.1: Create a state to manage the list of todos
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Step 3.2: Handle input field change
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Step 3.3: Handle form submission to add a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      // Create a new todo object
      const newTodoItem = {
        id: Date.now(),
        title: newTodo,
        status: 'pending', // Default status is pending
      };

      // Update the list of todos
      setTodos([...todos, newTodoItem]);

      // Clear the input field
      setNewTodo('');
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>

      {/* Step 3.3: Render the list of todos using the TodoList component */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;



