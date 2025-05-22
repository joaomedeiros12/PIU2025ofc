import React, { useState } from 'react';

function ChangeTheme() {
  const [corDeFundo, setCorDeFundo] = useState('white');
  const [corDeFonte, setCorDeFonte] = useState('black');

  const mudarCor = () => {
    setCorDeFundo(corDeFundo === 'white' ? 'black' : 'white');
    setCorDeFonte(corDeFonte === 'black' ? 'white' : 'black');
  };

  return (
    <body style={{ backgroundColor: corDeFundo, color: corDeFonte}}>
        <button onClick={mudarCor}>Mudar Cor</button>
    </body>
  );
}

export default ChangeTheme;