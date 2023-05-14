import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Torta from "./img2/torta.jpeg";
import Postres from "./img2/postres.jpg";
import Panes from "./img2/panes.jpeg";
import "./catalogo.css";
export function Card() {
  const contenido = [
    {
      title: "Tortas",
      jpg: Torta,
      path: "/Pasteles",
      description:
        "Las tortas son un tipo de pastel que se caracterizan por tener varias capas de bizcocho o esponja, que se intercalan con capas de relleno, como crema o frutas. Suelen estar cubiertas con una capa de frosting o crema batida, y pueden tener diversos sabores, como chocolate, vainilla, frutas, entre otros.",
      id:1
    },
    {
      title: "Postres",
      jpg: Postres,
      path: "/Postres",
      description:
        "La categoría de postres puede incluir una variedad de dulces y postres, como mousses, pudines, tartas, flanes, helados, entre otros. Esta categoría puede ser ideal para ofrecer una amplia selección de opciones dulces.",
      id:2
    },
    {
      title: "Panes",
      jpg: Panes,
      path: "/Panes",
      description:
        "La categoría de panes puede incluir diferentes tipos de panes, como baguettes, panecillos, bollos, pan de molde, entre otros. Esta categoría puede ser una buena opción para ofrecer opciones saladas y complementar la selección de postres y tortas.",
      id:3
    },
  ];
  return (
    <div className="container prob">
      {contenido.map((c) => {
        return (
          <div key={c.id} className="card col-md-4 mx-2">
            <img src={c.jpg} alt=""></img>
            <div className="card-body">
              <h4 className="cart-title">{c.title}</h4>
              <p className="card-text text-secondary">
                {c.description}
              </p>
              <div>
                <Link className="btn btn-primary" to={c.path}>
                  Ver mas
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
