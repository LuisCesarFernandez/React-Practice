import './estilos.css';
import mision from './img/mision.jpg';
export function Mision() {
  return (
    <div className='nosotros'>
      <div>
        <h1>Misión</h1>
        <p>
          Ofrecer a nuestros clientes los postres más deliciosos y de la más
          alta calidad, hechos con ingredientes frescos y naturales, con un
          servicio excepcional y una atención al cliente personalizada, para
          crear experiencias inolvidables que generen momentos de felicidad y
          satisfacción en sus vidas.
        </p>
      </div>
      <div>
        <img src={mision} className='mision'></img>
      </div>
    </div>
  );
}
