import React from "react";
import Table from "../components/table/Table";
import TableLegend from "../components/table/TableLegend";
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
