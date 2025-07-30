import { useState, useEffect } from 'react';

export default function AlbunsPorUser() {
  const [userId, setUserId] = useState('');
  const [albuns, setAlbuns] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const fetchAlbuns = async () => {
      if (userId === '') {
        setAlbuns([]);
        setErro('');
        return;
      }

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        const filtrados = data.filter(album => album.userId === Number(userId));
        setAlbuns(filtrados);
        setErro(filtrados.length ? '' : 'Nenhum álbum encontrado para esse userId.');
      } catch (e) {
        console.error('Erro ao buscar álbuns:', e);
        setErro('Erro ao buscar dados.');
        setAlbuns([]);
      }
    };

    fetchAlbuns();
  }, [userId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Buscar Álbuns por UserID</h2>
      <input
        type="number"
        placeholder="Digite um userId"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <ul>
        {albuns.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
