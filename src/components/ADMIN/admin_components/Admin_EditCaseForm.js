import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn, MDBCol, MDBRow } from "mdbreact";

import Admin_EditCaseBTNGroup from "./Admin_EditCaseBTNGroup";
import Admin_EditCaseInfoBox from "./Admin_EditCaseInfoBox";
import Admin_EditCaseEdit from "./Admin_EditCaseEdit";
import useToggle from "../../../hooks/useToggle";
import useFormHook from "../../../hooks/useFormHook";

export default (props) => {
  const [editing, setEditing] = useToggle(false);

  return (
    <div
      className="jumbotron py-2 my-2 mx-1 w-100"
      style={{ border: "#c2185b  solid 1px", borderRadius: 2 }}
    >
      <MDBRow>
        <MDBCol size="9" className="">
          <Admin_EditCaseInfoBox data={props.data} />
        </MDBCol>
        <MDBCol size="3" className="">
          <Admin_EditCaseBTNGroup
            on_edit={setEditing}
            setReload={props.setReload}
            data={props.data}
          />
        </MDBCol>
      </MDBRow>
      {editing ? (
        <Admin_EditCaseEdit data={props.data} setReload={props.setReload} />
      ) : (
        ""
      )}
    </div>
  );
};
