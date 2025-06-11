import { carros } from './dados_carro.js';

function Listar() {
    const listCarros = carros.map(carro =>
        // criando a variavel para listar os carros mapeando-a pelo o array em referencia
        <li key={carro.id}>

          <p>
            <b>{carro.modelo}:</b>
            {' ' + carro.cor + ' '}
          </p>
        </li>
        //essa lista apenas define o que vai ser mostrado, consquentemente, o modelo e a cor que eu quero que mostre
      );

      const novos = carros.filter(carro => carro.ano >= 2019);
        //já essa variavel (novos), vai guardar o FILTRO dos carros cujo o valor do atributo .ano seja maior ou igual a 2019
        return (
        <>
        <article>
            <h1>Carros</h1>
            <ul>{listCarros}</ul>

            {/*aqui mostra todos os carros de acordo com a variavel la de cima*/}
        </article>
        <div>
            <h1 align="center">Mais novos que 2019</h1>
            <ul className='lista'>
                {novos.map(novo => (
                    // e aqui, estou fazendo mais um mapeamento, só que dessa vez, com a variavel com seu filtro já aplicado
                <li className='item' key={novo.id}>
                    <div className="card">
                        <h2>{novo.modelo}</h2>
                        <p>{novo.cor}</p>
                    {/*aqui mostra todos os carros que sao definidos pela condição no filtro, que em questão seria o .ano maior ou igual a 2019*/}
                    </div>
                </li>
                ))}
            </ul>
        </div>
        </>
        );
  }

export default Listar

//aqui eu exporto para utilização em outros componentes 
  