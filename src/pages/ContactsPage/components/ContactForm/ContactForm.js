import { useEffect, useRef, useState } from "react";
import { TextField, Button } from "@mui/material";

export const ContactForm = () => {
  const [isErrorInName, setIsErrorInName] = useState();
  const [isErrorInEmail, setIsErrorInEmail] = useState();
  const [isErrorInMessage, setIsErrorInMessage] = useState();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const validation = () => {
    //name validation (if it is empty, less than one char or contains more than letters)
    let name = nameRef.current.value;
    if (name === "" || name.length <= 1 || /[^a-zA-Z]+/.test(name)) {
      setIsErrorInName(true);
    } else {
      setIsErrorInName(false);
    }

    //email validation(if it is empty or not contains @ or .)
    let email = emailRef.current.value;
    if (email === "" || !email.includes("@") || !email.includes(".")) {
      setIsErrorInEmail(true);
    } else {
      setIsErrorInEmail(false);
    }

    //message validation(if it is empty)
    let message = messageRef.current.value;
    if (message === "") {
      setIsErrorInMessage(true);
    } else {
      setIsErrorInMessage(false);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    validation();
  };
  useEffect(() => {
    if (
      isErrorInName === false &&
      isErrorInEmail === false &&
      isErrorInMessage === false
    ) {
      document.getElementById("contact-form").reset();
    }
  }, [isErrorInName, isErrorInEmail, isErrorInMessage]);

  return (
    <form id="contact-form">
      <TextField
        margin="dense"
        label="Full Name"
        fullWidth
        inputRef={nameRef}
        {...(isErrorInName && { error: true, helperText: "Invalid name" })}
      />
      <TextField
        margin="dense"
        label="Email"
        fullWidth
        inputRef={emailRef}
        inputProps={{ inputMode: "email" }}
        {...(isErrorInEmail && { error: true, helperText: "Invalid email" })}
      />
      <TextField
        margin="dense"
        label="Message"
        fullWidth
        multiline
        rows={7}
        inputRef={messageRef}
        {...(isErrorInMessage && {
          error: true,
          helperText: "Message cannot be empty",
        })}
      />
      <Button onClick={submitForm} type="submit">
        Submit
      </Button>
    </form>
  );
};
