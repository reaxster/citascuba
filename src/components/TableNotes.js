import React from "react";

export default () => {
  return (
    <div className="justifyText warningBorder p-3 mb-5">
      <p>
        Con el objetivo de proteger su informacion, sus nombres no son mostrados
        en esta tabla. Si usted desea saber si su caso ya esta registrado en
        esta tabla, puede entrar su numero de record en la barra de busqueda. Su
        numero de Record es su fecha de nacimiento y fecha de entrevista
        combinados.
      </p>

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
      <p>
        <strong>
          Si Usted no ve su record en esta tabla es porque no ah sido aprovado
          por el administrador aun. En este caso, espere hasta 24h para volver a
          entrar su informacion. Nuestros records se apruevan siempre en las
          primeras 2h, pero depende mucho de nuestra disponibilidad de revisarlo
        </strong>
      </p>
    </div>
  );
};
