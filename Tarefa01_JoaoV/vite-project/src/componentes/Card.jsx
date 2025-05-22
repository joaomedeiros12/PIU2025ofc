import img1 from "../images/dados.png"
import img2 from "../images/images.png"
import img3 from "../images/compiuter.png"
import img4 from "../images/bob.png"
import img5 from "../images/adidas.png"
import img6 from "../images/seila.png"


function Card(){
    const dados = {
        name: 'Dados',
        imageUrl: img1,
        imageSize: 90,
      };

      const apple = {
        name: 'Apple',
        imageUrl: img2,
        imageSize: 90,
      };
      const pc = {
        name: 'pc',
        imageUrl: img3,
        imageSize: 90,
      };
      const bob = {
        name: 'Bob',
        imageUrl: img4,
        imageSize: 90,
      };
      const adidas = {
        name: 'adidas',
        imageUrl: img5,
        imageSize: 90,
      };
      const seila = {
        name: 'seila',
        imageUrl: img6,
        imageSize: 90,
      };

    return(
        <>
        <div className="mae">
            <h1>{dados.name}</h1>
            <img
            className="avatar"
            src={dados.imageUrl}
            alt={'Photo of ' + dados.name}
            style={{
            width: dados.imageSize,
            height: dados.imageSize
            }}/>
            <h1>{apple.name}</h1>
            <img
            className="avatar"
            src={apple.imageUrl}
            alt={'Photo of ' + apple.name}
            style={{
            width: apple.imageSize,
            height: apple.ipcmageSize
            }}/>
            <h1>{pc.name}</h1>
            <img
            className="avatar"
            src={pc.imageUrl}
            alt={'Photo of ' + pc.name}
            style={{
            width: pc.imageSize,
            height: pc.imageSize
            }}/>
            <h1>{bob.name}</h1>
            <img
            className="avatar"
            src={bob.imageUrl}
            alt={'Photo of ' + bob.name}
            style={{
            width: bob.imageSize,
            height: bob.imageSize
            }}/>
            <h1>{adidas.name}</h1>
            <img
            className="avatar"
            src={adidas.imageUrl}
            alt={'Photo of ' + adidas.name}
            style={{
            width: adidas.imageSize,
            height: adidas.imageSize
            }}/>
            <h1>{seila.name}</h1>
            <img
            className="avatar"
            src={seila.imageUrl}
            alt={'Photo of ' + seila.name}
            style={{
            width: seila.imageSize,
            height: seila.imageSize
            }}/>
            
           
        </div>
        </>
    )
}

export default Card;