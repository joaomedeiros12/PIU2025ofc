import { useState } from "react";



function Contador() {

    const [count, setCount] = useState(0)

    // aqui eu inicio o contador com uma variavel que vai guardar até então o valor 0... 
    //o setCount seria a contagem que iria se iniciar a partir dali, ou seja, começa de 0 e o setCount iria ou aumentar ou diminuir seu valor


    return (

        <>

        <h1>Contagem: {count}</h1>
        <button id="aumentar" onClick={() => setCount((count) => count + 1)}>Aumentar</button>

        {/* aqui simplesmente com o valor da função onClick, que cria o evento de clicar no elemento e a função do setCount faz a implementação de +1 unidade ao valor da variavel count*/}

        <button id="diminuir" onClick={() => setCount((count) => count -1 )}>Diminuir</button>
        {/* mesma coisa da de cima, so que ao clicar, ira diminuir o valor da variavel count em vigencia*/}
        </>
    )
}

export default Contador

//aqui eu exporto para utilização em outros componentes 