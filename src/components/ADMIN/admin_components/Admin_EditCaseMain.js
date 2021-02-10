import Admin_EditCaseForm from "./Admin_EditCaseForm";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { MDBCol } from "mdbreact";
export default () => {
  const [data, setData] = useState([]);
  const [submiting, setSubmitting] = useState(false);

  useEffect(() => {
    let componentIsMounted = true;
    const getAll = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/cases/`
        );
        console.log("DATA HAS BEEN RETRIEVED SUCCESSFULLY ON  EDIT TABLE");
        //console.log(res.data);

        if (componentIsMounted) {
          setData(res.data.cases);
          setSubmitting(false);
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

  const handleUpdateRecord = (e) => {
    e.preventDefault();
    setSubmitting(true);
  };

  //TODO: Need to Update State to Submit Data

  const handleDataChange = (e) => {
    console.log({ ...data, [e.target.name]: e.target.value });
  };

  let EditCaseForm = data.map((item) => (
    <MDBCol md="6" className="mb-5" key={item._id}>
      <Admin_EditCaseForm
        data={item}
        submitting={submiting}
        setSubmitting={setSubmitting}
        handleChange={handleDataChange}
        handleUpdateRecord={handleUpdateRecord}
      />
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
        {EditCaseForm}
      </div>
    </MDBCol>
  );
};
