import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Selva from "./img2/selvaNegra.jpeg";
import Leche from "./img2/torta3Leches.jpg";
import Helada from "./img2/tortaHelada.jpg";
import Vainilla from "./img2/tortaVainilla.jpg";
import Chocolate from "./img2/tortaChocolate.jpg";
import Zanahoria from "./img2/tortaZanahoria.jpg";
import "./catalogo.css";
export function Pastel() {
  const contPasteles1 = [
    {
      title: "Torta Selva Negra",
      jpg: Selva,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.35.00 el trozo a S/.5.00",
      id: 1,
    },
    {
      title: "Torta 3 Leches",
      jpg: Leche,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.35.00 el trozo a S/.4.00",
      id: 2,
    },
    {
      title: "Torta Helada",
      jpg: Helada,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.25.00 el trozo a S/.2.50",
      id: 3,
    },
  ];

  const contPasteles2 =[
    {
      title: "Torta de Vainilla",
      jpg: Vainilla,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.30.00 el trozo a S/.4.00",
      id: 4,
    },
    {
      title: "Torta de Chocolate",
      jpg: Chocolate,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.28.00 el trozo a S/.3.80",
      id: 5,
    },
    {
      title: "Torta de Zanahoria",
      jpg: Zanahoria,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.38.00 el trozo a S/.4.50",
      id: 6,
    },
  ];

  return (
    <div className="fo">
      <br></br>
      <br></br>
      <h1 className="titulo">Nuestros Pasteles</h1>
      <div className="card-group ca">
        {contPasteles1.map((pastelito) => {
          return (
            <div key={pastelito.id} className="card me-2">
              <img src={pastelito.jpg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pastelito.title}</h5>
                <p className="card-text">{pastelito.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {pastelito.price}
                  </small>
                </p>
              </div>
            </div>
          );
        })}
        ;
      </div>
      <div className="card-group ca">
        {contPasteles2.map((pastelitos2) => {
          return (
            <div key={pastelitos2.id} className="card me-2">
              <img src={pastelitos2.jpg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pastelitos2.title}</h5>
                <p className="card-text">{pastelitos2.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {pastelitos2.price}
                  </small>
                </p>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}
