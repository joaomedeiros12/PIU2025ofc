import { useState, useEffect } from 'react';

export default function ChangeColor() {
  const [text, setText] = useState('');

  function handleColor() {
    const cores = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#835AFD'];
    const randomColor = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = randomColor;
  }

  useEffect(() => {
    if (text === 'PIUprova') {
      handleColor();
    }
  }, [text]); 

  return (
    <div className="card">
      <input
        type="text" placeholder="Digite algo..." onChange={(e) => setText(e.target.value)} value={text}/>
    </div>
  );
}