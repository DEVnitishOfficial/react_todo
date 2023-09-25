// TodoItem.js

import React from 'react';

function TodoItem({ todo }) {
  return (
    <li>
      {/* Display the todo title */}
           <span>{todo.title}</span>

{/* Display the todo status (pending/completed) */}
<span>Status: {todo.status}</span>

{/* Implement the button to update todo status */}
<button>
  {todo.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
</button>

{/* Implement the button to remove the todo */}
<button>Remove</button>
</li>
);
}

export default TodoItem;

