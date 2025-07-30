import { useState, useEffect } from 'react';

export default function ColorOnInput() {
  const [text, setText] = useState('');

  function handleColor() {
    const cores = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#835AFD'];
    const randomColor = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = randomColor;
  }

  // Toda vez que o texto muda, muda a cor de fundo
  useEffect(() => {
    if (text !== '') {
      handleColor();
    }
  }, [text]); // dispara quando "text" muda

  return (
    <div className="card" style={{ padding: '2rem' }}>
      <input
        type="text"
        placeholder="Digite algo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
    </div>
  );
}
