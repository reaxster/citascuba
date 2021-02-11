import Admin_EditCaseForm from "./Admin_EditCaseForm";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import useFormHook from "../../../hooks/useFormHook";

import { MDBCol, MDBBtn } from "mdbreact";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let componentIsMounted = true;
    const getAll = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/cases/notapproved`
        );
        console.log("DATA HAS BEEN RETRIEVED SUCCESSFULLY ON  TABLE");
        console.log(res.data);

        if (componentIsMounted) {
          setData(res.data.cases);
        }
      } catch (err) {
        // Handle Error Here
        console.log("ERROR HAS OCCURED WHEN RETRIEVING TABLE VALUES");
        console.error(err);
      }
    };
    getAll();
    return () => (componentIsMounted = false);
  }, []);

  let EditCaseForm = data.map((item) => (
    <MDBCol md="6" key={item._id}>
      <Admin_EditCaseForm data={item} />
    </MDBCol>
  ));

  return (
    <MDBCol size="10" className=" shadow h-100 overflow-hidden w-100">
      <div className="red darken-4 text-white">
        <h1>
          <strong>Edita los Casos o Aprubalos</strong>
        </h1>
      </div>
      <div className="d-flex flex-wrap jumbotron pt-2 h-100 overflow-auto h-75 x-3 w-100">
        {data.length == 0 ? (
          <h1>
            No existe ningun record que aprovar. Esto puede deberse a que nadie
            a puesto informacion nueva o ya todos los records estan aprovados
          </h1>
        ) : (
          EditCaseForm
        )}
      </div>
    </MDBCol>
  );
};
