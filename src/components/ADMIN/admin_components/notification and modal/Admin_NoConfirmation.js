import { MDBBtn } from "mdbreact";

export default (props) => {
  const handleSaveChanges = () => {
    props.modalHandler();
  };

  return (
    <div className={props.className}>
      <MDBBtn
        style={{
          textAlign: "center",
          margin: 0,
          width: "90%",
          ...props.btnStyle,
        }}
        color={props.color}
        onClick={handleSaveChanges}
        className={"d-flex justify-content-center m-1"}
      >
        {props.children}
      </MDBBtn>
    </div>
  );
};
