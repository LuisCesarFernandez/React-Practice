import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./catalogo.css";
import Frances from "./img2/panFrances.jpg";
import Yema from "./img2/panYema.jpg";
import Coliza from "./img2/panColiza.jpeg";
import Caracol from "./img2/panCaracol.jpeg";
import Caramandunga from "./img2/panCaramandunga.jpg";
import Chapata from "./img2/panChapata.jpg";
export function Pan() {
  const contPanes1 = [
    {
      title: "Pan Frances",
      jpg: Frances,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bitlonger.",
      price: "S/.0.20 c/u",
      id:1,
    },
    {
      title: "Pan Yema",
      jpg: Yema,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.0.30 c/u",
      id:2,
    },
    {
      title: "Pan Coliza",
      jpg: Coliza,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.0.25 c/u",
      id:3,
    },
  ];

  const contPanes2 =[
    {
      title: "Pan Caracol",
      jpg: Caracol,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.0.30 c/u",
      id:4,
    },
    {
      title: "Caramandunga",
      jpg: Caramandunga,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.0.50 c/u",
      id:5,
    },
    {
      title: "Chapata",
      jpg: Chapata,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "S/.0.20 c/u",
      id:6,
    },
  ]
  return (
    <div className="fo">
      <br></br>
      <br></br>
      <h1 className="titulo">Nuestros Panes</h1>
      <div className="card-group ca">
        {contPanes1.map((pancitos) => {
          return (
            <div key={pancitos.id} className="card col-md-4 mx-2">
              <img src={pancitos.jpg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pancitos.title}</h5>
                <p className="card-text">{pancitos.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {pancitos.price}
                  </small>
                </p>
              </div>
            </div>
          );
        })};
      </div>
      <div className="card-group ca">
        {contPanes2.map((pancitos2) => {
          return (
            <div key={pancitos2.id} className="card col-md-4 mx-2">
              <img src={pancitos2.jpg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pancitos2.title}</h5>
                <p className="card-text">{pancitos2.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {pancitos2.price}
                  </small>
                </p>
              </div>
            </div>
          );
        })};
      </div>
    </div>
  );
}
