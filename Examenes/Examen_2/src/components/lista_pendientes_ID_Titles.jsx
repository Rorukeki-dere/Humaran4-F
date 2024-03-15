import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pend_ID_Title = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Pend_ID_Title;