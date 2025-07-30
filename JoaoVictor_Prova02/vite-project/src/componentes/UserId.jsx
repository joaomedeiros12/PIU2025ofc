import { useState, useEffect } from 'react';

export default function AlbunsPorUser() {
  const [userId, setUserId] = useState('');
  const [albuns, setAlbuns] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchAlbuns = async () => {
      if (userId === '') {
        setAlbuns([]);
        return;
      }

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        const filtrados = data.filter(album => album.userId === Number(userId)); //Number me transforma userId no que eu quero, pra receber uma string e transofmar no formato que eu quero
        setAlbuns(filtrados);
      } catch (e) {
        setAlbuns([]);
      }
      finally {
        setLoading(false); 
      }
    }; //tentativa muito falha de implementar o loading

    fetchAlbuns();
  }, [userId]); // variações em userId irá recarregar a lista

  


  return (
    <div>
      <h2>Buscar Álbuns por UserID</h2>
      <input type="number" placeholder="Digite um número de 1 a 10" value={userId} onChange={e => setUserId(e.target.value)}/>  
      {/* input que irá receber o id do usuario (userId) */}
      <ul>{albuns.map(album => (<li key={album.id}>{album.title}</li>))}</ul>
      {/* O map da lista sendo renderizada */}

    </div>
  );
}