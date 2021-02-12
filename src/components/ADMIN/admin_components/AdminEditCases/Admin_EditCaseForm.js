import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn, MDBCol, MDBRow } from "mdbreact";

import Admin_EditCaseBTNGroup from "./Admin_EditCaseBTNGroup";
import Admin_EditCaseInfoBox from "./Admin_EditCaseInfoBox";
import Admin_EditCaseEdit from "./Admin_EditCaseEdit";
import useToggle from "../../../../hooks/useToggle";
import useFormHook from "../../../../hooks/useFormHook";

export default (props) => {
  const [editing, setEditing] = useToggle(false);

  return (
    <div
      className="my-3  p-1 w-100"
      style={{ border: "#c2185b  solid 2px", borderRadius: 3 }}
    >
      <MDBRow>
        <MDBCol size="7" className="">
          <Admin_EditCaseInfoBox data={props.data} />
        </MDBCol>
        <MDBCol size="5" className="">
          <Admin_EditCaseBTNGroup
            on_edit={setEditing}
            setReload={props.setReload}
            data={props.data}
          />
        </MDBCol>
      </MDBRow>
      <div className="d-flex  justify-content-center ">
        {editing ? (
          <Admin_EditCaseEdit data={props.data} setReload={props.setReload} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
