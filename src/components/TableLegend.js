import React from "react";
import "./components.css";

export default (props) => {
  return (
    <div
      className={`legendContainer flex-column flex-lg-row  ${props.className}`}
    >
      <div className="legendItemsContainer">
        <div className="legend1 allLegendItems">
          <h5>
            <strong>Record</strong>
          </h5>
          <hr className="legendHR" />
          <p className="legendText">
            Record: este número es el que se muestra en nuestra base de datos.
            Es una combinación de su fecha de nacimiento y la de su caso
            cerrado.
          </p>
        </div>
      </div>

      <div className="legendItemsContainer">
        <div className="legend2 allLegendItems ">
          <h5>
            <strong>VISA</strong>
          </h5>
          <hr className="legendHR" />

          <p className="legendText">
            Visa: es el tipo de visa por la cual usted se encuentra aplicando.
            El tiempo de procesamiento de su caso depende en gran medida de la
            categoría de su visa.
          </p>
        </div>
      </div>

      <div className="legendItemsContainer">
        <div className="legend3 allLegendItems ">
          <h5>
            <strong>CC</strong>
          </h5>
          <hr className="legendHR" />

          <p className="legendText">
            CC (Caso Cerrado): es la fecha en la que se completó su caso y fue
            enviado a la embajada donde se dará cita su entrevista
          </p>
        </div>
      </div>

      <div className="legendItemsContainer">
        <div className="legend4 allLegendItems ">
          <h5>
            <strong>ENT</strong>
          </h5>
          <hr className="legendHR" />

          <p className="legendText">
            ENT (fecha de entrevista): es la fecha de la entrevista previamente
            agendada y confirmada en la embajada de Georgetown, Guyana o
            cualquier otra.
          </p>
        </div>
      </div>

      <div className="legendItemsContainer">
        <div className="legend5 allLegendItems ">
          <h5>
            <strong>EXP</strong>
          </h5>
          <hr className="legendHR" />

          <p className="legendText">
            EXP (Caso expedito): es la condición que tiene un caso de
            inmigración de ser finalizado antes del tiempo promedio establecido
            para su procesamiento.
          </p>
        </div>
      </div>
    </div>
  );
};
