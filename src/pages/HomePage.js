import React from "react";
import ReportedVisas from "../components/ReportedVisas";
import ReportedVisaFeed from "../Utils/ReportedVisaFeed";
import WaitingTimePAge from "./WaitingTimePAge";
import { MDBContainer } from "mdbreact";

export default () => {
  const reportedVisa = ReportedVisaFeed.data.map((data) => (
    <ReportedVisas data={data} />
  ));
  return (
    <div>
      <MDBContainer>
        <h1>Bienvenido a nuestra pagina web. </h1>
        <h2>
          <strong>Creada por y para los cubanos</strong>
        </h2>
        <p>
          En esta pagina web usted podra encontrar informacion acerca de las
          entrevitas que se estan llevando a cabo en Guyana. Esta inmormacion
          incluye fechas de entrevista a personas que cerraron su caso
          recientemente de diferentes tipos de visas
        </p>
        <p>
          Es importante aclarar que no es la intencion de este sitio web brindar
          ayuda legal. Igualmente, la informacion encontrada aqui no puede ser
          interpretada definitivamente o como la verdad absoluta. Este sitio es
          solo para brindar informacion basada en fechas de entrevistas y casos
          cerrados reportados por nuestros usuarios. Una vez Mas, si usted
          quiere saber cuanto se demorara su caso y desea obtener informacion
          acertada del mismo debe de contactar al NVC, USCIS, su abogado, o a
          cualquier otra entidad que se este haciendo caso de su cargo
        </p>
        <p>
          Este sitio web no se responsabiliza por como usted interprete la
          informacion aqui ofrecida. Una vez mas, esto es solo apra dar un
          estimado basado en datos entrados de entrevistas anteriores, y esta
          informacion no puede ser usada como una verdad absoluta
        </p>
      </MDBContainer>
    </div>
  );
};
