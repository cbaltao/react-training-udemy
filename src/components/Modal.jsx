import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

//This is object destructuring, it used to 'props' with the property 'children'.
//This simply represents 'props.children', the {} = props.
//'children' represents the content between the parent tags.

//e.stopPropagation(), in the onClick event handler, e.stop
function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}>
        <dialog
          open
          className={classes.modal}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
