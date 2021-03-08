import React from "react";

const privacyNotice = [
  "Los datos personales proporcionados por los usuarios, son utilizados estrictamente en la realización de funciones propias de la Compañía y no serán transferidos a terceros bajo ningún concepto.",
  "La referencia informativa para los usuarios de la web, serán los mismos datos personales de los usuarios restantes, de ahí su importancia para la dinámica del sitio.",
  "Al usuario se le solicitará los siguientes datos personales: " +
    "Nombre y apellidos, correo electrónico, fecha de caso consular cerrado, fecha de entrevista en la embajada, tipo de visado al que se encuentra aplicando y carácter de la visa (si es esta expedita o no).",
];

const termsOfUse = [
  'Las informaciones aquí mostradas son publicadas por el propio usuario. NO deben ser calificadas como "verdad absoluta".',
  "La web NO se responsabiliza por las interpretaciones o uso de la información por parte del usuario.",
  "El sitio se encuentra actualmente en fase de desarrollo, cualquier modificación en su contenido o diseño, debe ser aceptado por el usuario sin previo aviso.",
  "El acceso al sitio web es completamente libre de costo",
  "La administración del sitio puede ser delegada a terceros sin afectar esto los términos y condiciones descritos para ello.",
  "El sitio se ha diseñado para el usuario que se encuentra transitando por un proceso consular con el objetivo de emigrar a Estados Unidos de América.",
];

const user = [
  "El usuario se compromete a utilizar el contenido de forma legal, respetando el orden y cuidando de no afectar el funcionamiento de la página, la información o \n" +
    "o el derecho que tienen los restantes usuarios sobre la misma.",
  "Los datos ingresados por el usuario son de carácter personal, usted decide compartir o no este tipo de información en nuestra web. No obstante, su identidad se encuentra protegida a la vista de otros usuarios.",
  "El usuario se compromete a suministrar información verídica en los formularios del sitio web.",
  "El acceso al sitio web no supone una relación entre el usuario y el titular del mismo.",
  "El usuario declara contar con la capacidad jurídica de cumplir los actuales términos y condiciones.",
];

const accessAndNavigation = [
  "El titular NO garantiza la continuidad y disponibilidad del contenido de la web, y siempre y cuando estime pertinente, realizará acciones que impulsen su buen funcionamiento sin responsabilidad alguna.",
  "NO es responsabilidad de quien representa al sitio, que el software esté libre de errores que puedan causar daño al software y/o hardware del equipo desde el cual el usuario se encuentra accediendo. Igualmente, NO se responsabiliza por los daños causados por el acceso y/o utilización del sitio web.",
];

const privacyAndProtectionOfData = [
  "El titular se responsabiliza a tomar medidas que garanticen la seguridad del usuario, para evitar que se haga uso indebido de la información personal publicada en el sitio web.",
  "El titular tiene pleno acceso a la información ingresada en la base de datos, lo que le permite ratificar la veracidad, actualidad y corrección de los contenidos para que sean utilizados exclusivamente con el fin con que fueron recaudados.",
  "El uso de datos personales se limitará a lo previsto en el Aviso de Privacidad disponible en (poner link)",
  'Nuestro sitio "EntrevistasCuba" podrá realizar cualquier trasformación en el Aviso de Privacidad, en cualquier momento y sin previo aviso. El usuario acepta dichas modificaciones.',
];

const linksPolicy = [
  'La sección "Noticias" es propiedad de la web, los enlaces contenidos NO, por tanto, se especifica SIEMPRE la fuente.',
  'Los enlaces utilizados en la página pertenecen a sitios externos, "entrevistascuba" NO se hace responsable de su veracidad. Sin embargo, se compromete a sustraerlos de fuentes 100% confiables y cuidadosamente actualizados.',
];

const intellectualProperty = [
  'El titular de "entrevistascuba" declara tener los derechos absolutos de propiedad intelectual e industrial del sitio web y todo su contenido de imágenes, logotipos, colores, estructuras, tipografías, diseños y demás elementos identitarios.',
  "Los derechos de propiedad intelectual e industrial que permiten al titular visualizar todos y cada uno de los elementos del sitio, almacenarlos, copiarlos e imprimirlos para uso personal, deben ser respetados por el usuario.",
  'Nuestro sitio "EntrevistasCuba" da total crédito a la fuente y/o creador de los enlaces publicados en la sección "Noticias". La web solo hace uso de dichos vínculos para mantener informado al usuario.\n',
];

function generateList(list, title, text) {
  const formatted = list.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="px-5">
      <h4>
        <strong>{title}</strong>
      </h4>
      <div className="justifyAllTerms">
        <p>{text}</p>
        <ol>{formatted}</ol>
        <hr />
      </div>
    </div>
  );
}

function TermsOfUse() {
  const title = "TÉRMINOS Y CONDICIONES DE USO";
  const text =
    "Este apartado describe las reglas dispuestas para el correcto uso del\n" +
    "          sitio “entrevistascuba”, propiedad de Reaxster Multiservices Inc., en\n" +
    "          cuanto a su contenido, servicios y políticas de privacidad. Al\n" +
    "          registrarse en la web, usted está aceptando las normas descritas y\n" +
    "          debe sujetarse a los siguientes términos y condiciones.";
  return generateList(termsOfUse, title, text);
}

function User() {
  const title = "USUARIO";
  const text =
    "La actividad del usuario en el sitio se rige por las siguientes condiciones.";
  return generateList(user, title, text);
}

function PrivacyNotice() {
  const title = "AVISO DE PRIVACIDAD";
  const text =
    "La Compañía Reaxster Multiservices Inc., proveniente de Miami, Florida, conforme a lo establecido en los estándares de protección de datos de los Estados Unidos, pone a disposición de los usuarios, empleados y público en general, el Aviso de Privacidad que a continuación se muestra:";
  return generateList(privacyNotice, title, text);
}

function AccessAndNavigation() {
  const title = "ACCESO Y NAVEGACIÓN ";
  return generateList(accessAndNavigation, title);
}

function PrivacyAndProtectionOfData() {
  const title = "POLĺTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS";
  return generateList(privacyAndProtectionOfData, title);
}

function LinksPolicy() {
  const title = "POLĺTICA DE ENLACES";
  return generateList(linksPolicy, title);
}

function IntellectualProperty() {
  const title = "PROPIEDAD INTELECTUAL E INDUSTRIAL";
  return generateList(intellectualProperty, title);
}

export {
  TermsOfUse,
  PrivacyNotice,
  User,
  AccessAndNavigation,
  PrivacyAndProtectionOfData,
  LinksPolicy,
  IntellectualProperty,
};
