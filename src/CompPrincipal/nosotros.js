import "./estilos.css";
import pastelito from "./img/Pasteleria.jpg";
export function Nosotros() {
  return (
    <div className="nosotros">
      <div>
        <h1>Nosotros</h1>
        <p>
          Después del trauma de la Crisis en las Tierras Infinitas , el Monitor
          solitario original se retiró de la realidad para lamerse las heridas,
          solo para descubrir que una de sus heridas había dejado una costra con
          la forma de un superhombre gigante hecho de metales divinos. Creyendo
          que ya no le era posible vigilar su propio cuerpo inconmensurablemente
          grande, el Monitor comenzó a subdividirse. Y el primero de estos
          Monitores subdivididos fue Dax Novu. Otros siguieron, y pronto, toda
          una civilización había comenzado a tomar forma. Dax tomó un amante,
          Zillo Valla , e incluso engendró un hijo, Nix Uotan . Mientras tanto,
          el propio Dax Novu dirigió expediciones a través del Multiverso para
          tratar de comprenderlo con mayor detalle. Pero lo que encontró Novu
          fue una verdad aterradora: los Monitores eran parásitos que se
          alimentaban del Multiverso y lo estaban destruyendo en el proceso.
          Cuando trató de explicar esto a los otros monitores, pocos estaban
          dispuestos a escuchar, como Zillo y Rox Ogama , pero la mayoría de
          ellos se horrorizaron y lo evitaron. Eventualmente, Dax adquirió el
          nombre de Mandrakk the Dark Monitor y fue encerrado (aunque se
          difundió la leyenda de que Mandrakk era una criatura completamente
          diferente, y que Dax Novu había dado su vida para encadenar al
          monstruo al abismo).
        </p>
      </div>
      <div>
        <img src={pastelito} className="pasteli"></img>
      </div>
    </div>
  );
}
