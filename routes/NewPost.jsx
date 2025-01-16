import { Link, Form, redirect } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../src/components/Modal";

function NewPost() {
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

  //jsx code
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="..">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  //formData.get('body');
  const postData = Object.fromEntries(formData); // {body:'...', author:'...'}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
