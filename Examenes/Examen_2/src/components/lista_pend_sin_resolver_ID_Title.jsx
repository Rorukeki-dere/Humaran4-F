import { useEffect, useState } from 'react';

const  Pend_sin_resolver_ID_Title = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data.filter(todo => !todo.completed));
    };

    fetchTodos();
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

export default Pend_sin_resolver_ID_Title;