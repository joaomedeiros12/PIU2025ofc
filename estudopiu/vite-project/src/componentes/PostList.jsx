import { useState, useEffect } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [filtroUserId, setFiltroUserId] = useState('');

  // Busca os dados da API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Erro ao buscar posts:', error));
  }, []);

  // Filtrando os posts pelo userId (se informado)
  const postsFiltrados = posts.filter(post =>
    filtroUserId ? post.userId === Number(filtroUserId) : true
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Lista de Posts</h2>

      <label>
        Filtrar por userId:
        <input
          type="number"
          value={filtroUserId}
          onChange={e => setFiltroUserId(e.target.value)}
          placeholder="Ex: 1"
          style={{ marginLeft: '1rem' }}
        />
      </label>

      <ul>
        {postsFiltrados.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <small>userId: {post.userId}</small>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
