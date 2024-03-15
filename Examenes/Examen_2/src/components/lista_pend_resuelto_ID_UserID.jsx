import React, { useState, useEffect } from 'react';

const Pend_resueltos_ID_UserID = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      const resolvedTodos = data.filter(todo => todo.completed);
      setTodos(resolvedTodos);
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
};

export default Pend_resueltos_ID_UserID;