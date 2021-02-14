import React from "react";
import Table from "../components/Table";
import TableLegend from "../components/TableLegend";
import { MDBContainer } from "mdbreact";

export default () => {
  return (
    <MDBContainer className="jumbotron my-5">
      <h1>Tabla de Fechas de Entrevista </h1>
      <hr />
      <TableLegend className="my-5" />
      <Table />
    </MDBContainer>
  );
};
