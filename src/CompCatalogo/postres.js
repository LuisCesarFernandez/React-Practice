import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alfajor from "./img2/Alfajores.jpg";
import PieLimon from "./img2/PieLimon.jpg";
import PieManzana from "./img2/PieManzana.jpg";
import CheesseCakeMaracuya from "./img2/CheesecakeMaracuya.jpg";
import Brownie from "./img2/Brownie.jpg";
import KNaranja from "./img2/kNaranja.jpg";
import "./catalogo.css";
export function Postre() {
  const contPostres1 = [
    {
      title: "Alfajores",
      jpg: Alfajor,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.0.20 c/u",
      id:1,
    },
    {
      title: "Pie de Limon",
      jpg: PieLimon,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.15.00 a S/.3.00 el trozo",
      id:2,
    },
    {
      title: "Pie de Manzana",
      jpg: PieManzana,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.16.00 a S/.3.50 el trozo",
      id:3,
    },
  ];
  const contPostres2 = [
    {
      title: "CheeseCake de Maracuyá",
      jpg: CheesseCakeMaracuya,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.20.00 a S/.2.00 el trozo",
      id:4,
    },
    {
      title: "Brownies",
      jpg: Brownie,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.1.50 c/u",
      id:5,
    },
    {
      title: "Keke de Naranja",
      jpg: KNaranja,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.25.00 a S/.3.50 el trozo",
      id:6,
    },
  ]
  return (
    <div className="fo">
      <br></br>
      <br></br>
      <h1 className="titulo">Nuestros Postres</h1>
      <div className="card-group ca">
        {contPostres1.map((postrecito2) => {
          return (
            <div key={postrecito2.id} className="card me-2">
              <img src={postrecito2.jpg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{postrecito2.title}</h5>
                <p className="card-text">{postrecito2.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {postrecito2.price}
                  </small>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card-group ca">
        {contPostres2.map((postrecito) => {
          return (
            <div key={postrecito.id} className="card me-2">
              <img src={postrecito.jpg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{postrecito.title}</h5>
                <p className="card-text">{postrecito.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {postrecito.price}
                  </small>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}