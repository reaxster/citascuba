import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBInput, MDBBtn } from "mdbreact";
import useFormHook from "../hooks/useFormHook";

export default () => {
  const [data, setData] = useState([]);
  const [test, setTest, resetTest] = useFormHook("");
  const [submit, setSubmit] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let componentIsMounted = true;
    const getAll = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/tests/`
        );
        console.log("DATA HAS BEEN RETRIEVED SUCCESSFULLY ON  TABLE");
        console.log(res.data);

        if (componentIsMounted) {
          setData(res.data);
        }
      } catch (err) {
        // Handle Error Here
        console.log("ERROR HAS OCCURED WHEN RETRIEVING TABLE VALUES");
        console.error(err);
      }
      setSubmit(false);
      setRerender(false);
    };
    getAll();
    return () => (componentIsMounted = false);
  }, [rerender]);

  const deleteData = (e) => {
    setSubmit(true);
    (async () => {
      try {
        const resp = await axios.delete(
          process.env.REACT_APP_BACKEND_URL + "/tests/" + e.target.value,
          { test }
        );
        alert(resp.data);
      } catch (err) {
        alert(err);
      }
    })();
    setRerender(true);
  };

  let htmlContent = data.map((item) => (
    <div className="container jumbotron w-75 p-2" key={item._id}>
      <h5>
        <strong>{item.test}</strong>
      </h5>
      <MDBBtn
        className="mb-2 mt-2"
        onClick={deleteData}
        value={item._id}
        disabled={submit}
        style={{ width: "50%" }}
        color="red"
      >
        DELETE
      </MDBBtn>
    </div>
  ));

  const postData = async () => {
    try {
      const resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/tests",
        { test }
      );
      alert(resp.data);
    } catch (err) {
      alert(err);
    }
  };

  function handleClick(e) {
    setSubmit(true);
    e.preventDefault();
    postData();
    resetTest();
    setRerender(true);
  }

  return (
    <div className="container jumbotron d-flex flex-column justify-content-center align-items-center">
      <h1>TESTING BOUNDS</h1>
      {/* <h1
        style={{ backgroundColor: "#B71C1C", color: "white", padding: "20px" }}
      >
        <strong>VERSION 2.0 TESTING CONSOLE</strong>
      </h1>
      <div className="d-flex flex-column justify-content-center align-items-center  w-75 mt-5 mb-5">
        <label htmlFor="testInput">Entra tus Datos Aqui</label>
        <input
          style={{ height: "3rem", width: "100%", fontSize: 20 }}
          placeholder="Entra tus Datos Aqui"
          id="testInput"
          value={test}
          onChange={setTest}
        />
        <MDBBtn
          style={{ height: "4rem", width: "100%" }}
          className="mb-2 mt-2"
          onClick={handleClick}
          disabled={submit}
        >
          POST Datos
        </MDBBtn>
      </div>
      {htmlContent}*/}
    </div>
  );
};
