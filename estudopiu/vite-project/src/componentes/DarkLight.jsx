import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#FFFFFF';
    document.body.style.color = darkMode ? '#FFFFFF' : '#000000';
  }, [darkMode]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <button onClick={toggleTheme}>
        Mudar para {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
