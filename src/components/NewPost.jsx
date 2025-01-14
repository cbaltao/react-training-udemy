//import { useState } from "react"; //Called a react hook (starts with 'use'), used in method 1.

import classes from "./NewPost.module.css";

function NewPost(props) {
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

  //jsx code
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
