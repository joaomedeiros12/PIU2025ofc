import { useState, useEffect } from 'react';

export default function RequisitionUserId() {
  const [albuns, setAlbuns] = useState([]);
  const [recarregar, setRecarregar] = useState(0); // Gatilho numérico que me fará atualizar a variável pra ter mudança de estado no useEffect

  useEffect(() => {
    const fetchAlbuns = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbuns(data);
      } catch (error) {
        console.error('Erro ao buscar álbuns:', error); // usando princípions de feedback (quero meus pontos extras "ao menos uns 2 ;-;")
      }
    };

    fetchAlbuns();
  }, [recarregar]); // Executa toda vez que o botão for clicado

  return (
    <div>
        <h1>Lista que recarrega</h1>
        <button id="aumentar" onClick={() => setRecarregar((count) => count + 1)}>Recarregar</button> {/*Ao clicar no botão, ira ter um aumento e mudar o estado do botão*/}
        <ul>
            {albuns.map(album => (<li key={album.id}>{album.title}</li>))}
      </ul>
    </div>
  )

}