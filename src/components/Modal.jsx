import classes from "./Modal.module.css";

//This is object destructuring, it used to 'props' with the property 'children'.
//This simply represents 'props.children', the {} = props.
//'children' represents the content between the parent tags.
function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
