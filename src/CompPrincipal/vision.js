import "./estilos.css";
import vision from "./img/vision.jpg";
export function Vision() {
  return (
    <div className="nosotros">
      <div>
        <img src={vision} className="vision"></img>
      </div>
      <div>
        <h1>Visión</h1>
        <p>
          Ser reconocidos como el mejor negocio de postres en la ciudad, por
          nuestra excelencia en la calidad de nuestros productos, nuestro
          servicio excepcional y nuestra atención al cliente personalizada, y
          expandirnos a nivel nacional e internacional para llevar nuestros
          deliciosos postres a más personas en todo el Perú.
        </p>
      </div>
    </div>
  );
}
