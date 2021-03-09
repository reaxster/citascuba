import React, { useContext, useReducer, useState } from "react";
import { MDBCard, MDBCardBody, MDBBtn, MDBCol } from "mdbreact";
import useFormHook from "../../hooks/useFormHook";
import CustomNewsInput from "./CustomNewsInput";
import ModalWithAction from "../ADMIN/admin_components/notification and modal/ModalWithAction";
import { AuthContext } from "../../contexs/useAuthContext";
import axios from "axios";
import useToggle from "../../hooks/useToggle";

const CreateNews = () => {
  const auth = useContext(AuthContext);

  const [img, updateImg] = useFormHook("");
  const [title, updateTitle] = useFormHook("");
  const [description, updateDescription] = useFormHook("");
  const [date, updateDate] = useFormHook("");
  const [link, updateLink] = useFormHook("");
  const [category, setCategory] = useFormHook("");
  const [source, updateSource] = useFormHook("");
  const [show, toggleShow] = useToggle(false);

  const [isCreate, toggleIsCreate] = useToggle(false);
  const [isSubmit, toggleIsSumbit] = useToggle(false);

  const createNews = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + `/news/`,
        { img, title, description, date, link, category, source },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      alert(res.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleCreate = (e) => {
    toggleIsSumbit(true);
    createNews();
    toggleIsSumbit(false);
  };

  return (
    <MDBCol
      size={12}
      className="my-3 p-0 d-flex flex-column justify-content-center"
    >
      {isCreate && (
        <ModalWithAction
          handleConfirm={handleCreate}
          handleClose={toggleIsCreate}
          show={isCreate}
          message="Do you want to create a record?"
          onConfirmReload={true}
          submit={isSubmit}
        />
      )}

      <MDBCard>
        {!show && auth.isLoggedIn && (
          <MDBBtn className="m-0" onClick={toggleShow}>
            Create News
          </MDBBtn>
        )}
        {show && (
          <MDBCardBody className="p-0 m-0">
            <h3 className="mt-3">Create A New Informative Post</h3>
            <hr style={{ width: "90%" }} />

            <div className="p-0 m-0">
              <CustomNewsInput
                placeholder="IMG URL"
                icon="fas fa-image"
                type="input"
                value={img}
                onChange={updateImg}
              />
              <CustomNewsInput
                placeholder="Title"
                icon="far fa-file-alt"
                type="input"
                value={title}
                onChange={updateTitle}
              />
              <CustomNewsInput
                placeholder="Date: mm/dd/yyyy"
                icon="far fa-calendar-alt"
                type="date"
                value={date}
                onChange={updateDate}
              />
              <CustomNewsInput
                placeholder="News Link"
                icon="fas fa-link"
                value={link}
                onChange={updateLink}
                type="input"
              />
              <CustomNewsInput
                placeholder="Category"
                icon="fas fa-filter"
                value={category}
                onChange={setCategory}
                type="input"
              />
              <CustomNewsInput
                placeholder="Source"
                icon="fas fa-filter"
                value={source}
                onChange={updateSource}
                type="input"
              />
              <CustomNewsInput
                placeholder="Description"
                icon="fas fa-align-left"
                value={description}
                onChange={updateDescription}
              />
            </div>
            <div>
              <MDBBtn onClick={toggleIsCreate}>SAVE</MDBBtn>
              <MDBBtn onClick={toggleShow}>CANCEL</MDBBtn>
            </div>
          </MDBCardBody>
        )}
      </MDBCard>
    </MDBCol>
  );
};

export default CreateNews;
