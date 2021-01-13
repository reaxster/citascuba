import React from "react";
import "./components.css";

export default (props) => {
  return (
    <div
      className={`legendContainer flex-column flex-lg-row  ${props.className}`}
    >
      <div className="legendItemsContainer ">
        <div className="legend1 allLegendItems" />
        <h5>
          <strong>Record</strong>
        </h5>
        <p className="legendText">
          Es el numero de record en nuestra base de datos. Es una combinacion de
          su gecha de nacimiento y la fecha de su caso cerrado.
        </p>
        <div className="legend1 allLegendItems" />
      </div>
      <div className="legendItemsContainer">
        <div className="legend2 allLegendItems " />
        <h5>
          <strong>VISA</strong>
        </h5>
        <p className="legendText">
          Es el tipo de Visa el cual el NVC le ah asignado. La velocidad de su
          caso depende en algunas ocasiones del tipo de visa.
        </p>
        <div className="legend2 allLegendItems " />
      </div>
      <div className="legendItemsContainer">
        <div className="legend3 allLegendItems "></div>
        <h5>
          <strong>CC</strong>
        </h5>
        <p className="legendText">
          CC (Caso Cerrado) es la fecha en la que el caso fue completado y
          enviado a la embajada donde le daran una fecha de entrevista.
        </p>
        <div className="legend3 allLegendItems " />
      </div>
      <div className="legendItemsContainer">
        <div className="legend4 allLegendItems " />
        <h5>
          <strong>ENT</strong>
        </h5>
        <p className="legendText">
          (Interview Date) Esto es la fecha de la entrevista confirmada por la
          embajada de Guyana o cualquier otro lado.
        </p>
        <div className="legend4 allLegendItems " />
      </div>
      <div className="legendItemsContainer">
        <div className="legend5 allLegendItems " />
        <h5>
          <strong>EXP</strong>
        </h5>
        <p className="legendText">
          EXP (Expedited Case), esto demuestra si el caso fue expedited o si fue
          un caso normal. Casos expedited son mas rapidos.
        </p>
        <div className="legend5 allLegendItems " />
      </div>
    </div>
  );
};
