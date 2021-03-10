import React from "react";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import GetRecord from "../form/GetRecord";

export default () => {
  const [showRecordTool, updateShowRecordTool] = useToggle(false);

  return (
    <div className="justifyText warningBorder p-3 mb-5">
      <GetRecord show={showRecordTool} handleClose={updateShowRecordTool} />

      <p>
        Con el objetivo de proteger su privacidad, sus nombres no son mostrados
        en la tabla. Para confirmar que su caso se encuentra registrado, debe
        introducir su número de record en la barra de búsqueda, de no aparecer,
        es probable que su información aún no haya sido verificada y/o aprobada
        por la administración. Se les recomienda esperar un plazo de 24 horas
        para reinsertar sus datos. Trabajamos para que los nuevos records sean
        añadidos lo antes posible, siempre atendiendo a la disponibilidad de la
        administración para chequearlos.
      </p>

      <p>
        <Link onClick={updateShowRecordTool} className="my-2">
          <strong>Click Aqui Para Obtener Su Numero De Record</strong>
        </Link>
      </p>

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
