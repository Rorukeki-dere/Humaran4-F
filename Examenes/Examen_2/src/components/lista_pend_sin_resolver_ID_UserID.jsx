import React, { useState, useEffect } from 'react';

function Pend_sin_resolver_ID_UserID() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      const unresolvedTodos = data.filter(todo => !todo.completed);
      setTodos(unresolvedTodos);
    };

    fetchTodos();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Pend_sin_resolver_ID_UserID;