import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container, Content } from './styles';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function loadTodos() {
      const response = await api.get(
        'https://jsonplaceholder.typicode.com/todos'
      );

      setTodos(response.data);
    }
    loadTodos();
  }, []);
  return (
    <Content>
      <Container>
        <input type="text" />
        <table border="1">
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>
          {todos.map(e => (
            <tr>
              <td>{e.userId}</td>
              <td>{e.id}</td>
              <td>{e.title}</td>
            </tr>
          ))}
        </table>
      </Container>
    </Content>
  );
}
