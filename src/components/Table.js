import React from "react";
import { MDBDataTable } from "mdbreact";
import DatabaseFeed from "../Utils/DatabaseFeed";
import "./components.css";

export default (props) => {
  return (
    <div className="m-5">
      <h3>
        <strong>Verifique Si Su Record ah sido Añadido</strong>
      </h3>
      <div className="justifyText warningBorder p-3 mb-5">
        <p>
          Con el objetivo d eproteger su informacion, sus nombres no son
          mostrados en esta tabla. Si usted desea saber si su caso ya esta
          registrado en esta tabla, puede entrar su numero de record en la barra
          de busqueda. Su numero de Record es su fecha de nacimiento y fecha de
          entrevista combinados.
        </p>
        <p>
          <strong>Por ejemplo</strong>
          <ol>
            <li>Fecha De Nacimiento: 07/20/1865</li>
            <li>Fecha de Entrevista: 07/03/2021 </li>
            <li>Su Sumero de Record es: 0720186507032021</li>
            <li>
              Recuerde las fechas aqui mostradas estan en el formato de
              <strong> mes/dia/año - mm/dd/yyyy</strong>
            </li>
          </ol>
        </p>
      </div>
      <MDBDataTable
        hover
        bordered
        small
        striped
        data={DatabaseFeed.data}
        className="d-flex flex-column d-inline"
      />
    </div>
  );
};
