import React, { useEffect, useState } from "react";
import Spinner from "react-spinner-material";

export default () => {
  return (
    <>
      <div
        className="spinner-border m-5"
        role="status"
        style={{ width: "13rem", height: "13rem", color: "#880E4F" }}
      >
        <span className="sr-only pink darken-4">Loading...</span>
      </div>
    </>
  );
};
