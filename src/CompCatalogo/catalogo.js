import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./catalogo.css";
import { Card } from "./cards";
export function Catalogo() {
  return (
    <div className="cont">
      <div className="fondoT">
        <h1 className="titulo">Nuestras Categorías</h1>
        <p className="text">
          En nuestro negocio de repostería, nos enorgullece ofrecer una amplia
          variedad de productos que satisfacen los gustos de todos nuestros
          clientes. Desde pasteles y tortas de diferentes sabores y tamaños,
          hasta galletas, brownies y postres fríos, nuestras categorías ofrecen
          una experiencia deliciosa para todos los paladares. Además, todos
          nuestros productos son elaborados con ingredientes de la más alta
          calidad y cuidadosamente seleccionados. Nos aseguramos de utilizar
          ingredientes frescos y naturales para obtener el mejor sabor y la
          mejor textura en cada bocado. En nuestro negocio, creemos en la
          importancia de la calidad y la atención al detalle en todo lo que
          hacemos. Desde la selección de los ingredientes hasta la presentación
          final de nuestros productos, nos esforzamos por brindar una
          experiencia excepcional a todos nuestros clientes. Explore nuestras
          categorías y descubra la variedad de sabores y opciones que ofrecemos.
          Estamos seguros de que encontrará algo que le encantará y que lo
          dejará con ganas de probar más.
        </p>
      </div>
      <div className="container">
        <Card/>
      </div>
    </div>
  );
}
