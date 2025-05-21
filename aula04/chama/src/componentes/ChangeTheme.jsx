import React, { useState } from 'react';

function ChangeTheme() {
  const [corDeFundo, setCorDeFundo] = useState('white');

  const mudarCor = () => {
    setCorDeFundo(corDeFundo === 'white' ? 'black' : 'white');
  };

  return (
    <body style={{ backgroundColor: corDeFundo }}>
        <button onClick={mudarCor}>Mudar Cor</button>
    </body>
  );
}

export default ChangeTheme;