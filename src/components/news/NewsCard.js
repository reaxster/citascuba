import React, { useContext, useReducer, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import useFormHook from "../../hooks/useFormHook";
import CustomNewsInput from "./CustomNewsInput";
import ModalWithAction from "../ADMIN/admin_components/notification and modal/ModalWithAction";
import { AuthContext } from "../../contexs/useAuthContext";
import axios from "axios";
import { convertToMMDDYYY } from "../../Utils/Date/DateUtil";

/*TODO: Props
 *  img: URL
 * title
 * category
 * date
 * description
 * newsURL
 * Likes
 * Dislikes
 * */

const handleReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return { ...state, delete: true };
    case "EDIT":
      return { ...state, editmode: true };
    case "SAVE":
      return { ...state, save: true };
    case "SUBMIT":
      return { ...state, submit: true };

    default:
      return { delete: false, editmode: false, save: false, submitting: false };
  }
};

const NewsCard = (props) => {
  const auth = useContext(AuthContext);

  const [img, updateImg] = useFormHook(props.data.img);
  const [title, updateTitle] = useFormHook(props.data.title);
  const [description, updateDescription] = useFormHook(props.data.description);
  const [date, updateDate] = useFormHook(props.data.date);
  const [link, updateLink] = useFormHook(props.data.link);
  const [category, updateCategory] = useFormHook(props.data.category);
  const [source, updateSource] = useFormHook(props.data.source);

  /*--------------AXIOS UPDATE POST-----------------------------*/
  const updateNews = async () => {
    try {
      const res = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + `/news/${props.data._id}`,
        { img, title, description, date, link, category, source },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  const deleteNews = async () => {
    try {
      const res = await axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/news/${props.data._id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  /*--------------REDUCER LOGIC-----------------------------------*/
  const [state, dispatch] = useReducer(handleReducer, {
    delete: false,
    editmode: false,
    save: false,
    submit: false,
  });

  const handleStatusChange = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.name });
  };

  const handleCloseModal = () => {
    dispatch({ type: "" });
  };

  const handleSave = (e) => {
    dispatch({ submit: true });
    updateNews();
    handleCloseModal();
  };

  const handleDelete = async (e) => {
    dispatch({ submit: true });
    deleteNews();
    handleCloseModal();
  };

  /*------------END OF REDUCER LOGIC--------------------------*/

  const editModeInput = auth.isLoggedIn && (
    <div>
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
        onChange={updateCategory}
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
  );

  return (
    <MDBCol lg="6" md="10" size="12" className="my-3 p-2">
      {auth.isLoggedIn && (
        <ModalWithAction
          handleConfirm={handleSave}
          handleClose={handleCloseModal}
          show={state.save}
          message="Do you want to UPDATE this news?"
          is_reload={true}
        />
      )}

      {auth.isLoggedIn && (
        <ModalWithAction
          handleConfirm={handleDelete}
          handleClose={handleCloseModal}
          show={state.delete}
          message="Do you want to DELETE this news?"
          onConfirmReload={true}
        />
      )}

      <MDBCard style={{ width: "100%", maxHeight: "45rem" }}>
        {!state.editmode && (
          <MDBCardImage
            top
            src={img}
            style={{ width: "100%", height: "21rem" }}
            overlay="white-slight"
            hover
            waves
            alt="MDBCard image cap"
          />
        )}
        {state.editmode && editModeInput}

        {!state.editmode && (
          <MDBCardBody>
            {/* <a href="#!" className="activator waves-effect waves-light mr-4">
              <MDBIcon icon="share-alt" className="black-text" />
            </a>*/}
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBIcon far icon="clock" /> {convertToMMDDYYY(date)}
            <hr />
            <MDBCardText>{description}</MDBCardText>
            <a
              href={link}
              target="_blank"
              className="black-text d-flex justify-content-end"
            >
              <h5>
                Leer Mas
                <MDBIcon icon="angle-double-right" className="ml-2" />
              </h5>
            </a>
          </MDBCardBody>
        )}
        <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
          <ul className="list-unstyled list-inline font-small">
            <li className="list-inline-item pr-2 white-text">
              <MDBIcon far icon="far fa-file-alt" /> {"Fuente: " + source}
            </li>
            <li className="list-inline-item pr-2 white-text">
              <MDBIcon far icon="clock" /> {"Fecha " + convertToMMDDYYY(date)}
            </li>
            {/*     <li className="list-inline-item pr-2 white-text">
              <MDBIcon far icon="clock" />{" "}
              {"Categoria " + convertToMMDDYYY(date)}
            </li>*/}
          </ul>
        </div>

        {auth.isLoggedIn && (
          <div>
            {!state.editmode && (
              <MDBBtn
                name="EDIT"
                onClick={handleStatusChange}
                disabled={state.submit}
              >
                Edit
              </MDBBtn>
            )}
            {state.editmode && (
              <MDBBtn
                color="warning"
                name="SAVE"
                onClick={handleStatusChange}
                disabled={state.submit}
              >
                Save
              </MDBBtn>
            )}
            <MDBBtn
              color="danger"
              name="DELETE"
              onClick={handleStatusChange}
              disabled={state.submit}
            >
              Delete
            </MDBBtn>
          </div>
        )}
      </MDBCard>
    </MDBCol>
  );
};

export default NewsCard;
