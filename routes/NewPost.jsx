import { useState } from "react"; //Called a react hook (starts with 'use'), used in method 1.
import { Link } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../src/components/Modal";

function NewPost({ onAddPost }) {
  /*
    *
    * METHOD 1: 
    *
  const [enteredBody, setEnteredBody] = useState(""); //useState(default_value); This returns an array.
  //stateData[0] current value
  //stateData[1] state updating function

  //To use event listeners, you must use the react property ('onChange') and create a function to handle the event.
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
    */

  //[target, function to execute when target is modified]
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }

  //jsx code
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to="..">Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
