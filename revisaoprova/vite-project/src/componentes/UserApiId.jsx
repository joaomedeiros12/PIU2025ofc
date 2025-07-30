import { useState, useEffect } from 'react';

export default function ListaAlbuns() {
  const [albuns, setAlbuns] = useState([]);
  const [recarregar, setRecarregar] = useState(0); // Gatilho numérico

  useEffect(() => {
    const fetchAlbuns = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbuns(data);
      } catch (error) {
        console.error('Erro ao buscar álbuns:', error);
      }
    };

    fetchAlbuns();
  }, [recarregar]); // Executa toda vez que o botão for clicado

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Álbuns</h2>
      <button onClick={() => setRecarregar(prev => prev + 1)}>
        Recarregar Álbuns
      </button>

      <ul>
        {albuns.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
