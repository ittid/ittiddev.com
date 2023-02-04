import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [subjectError, setSubjectError] = useState({});
  const [messageError, setMessageError] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const valide = formValidation();

    if (valide) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      return true;
    } else {
      return false;
    }
  };

  const formValidation = () => {
    let isValid = true;

    const nameError = {};
    const emailError = {};
    const subjectError = {};
    const messageError = {};

    if (!/^([a-zA-Z ]){5,30}(\s)*$/.test(name)) {
      nameError.errorText = "please enter a valid name less that 30 characters";
      isValid = false;
    }
    setNameError(nameError);

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3}(\s)*)+$/g.test(email)) {
      emailError.errorText = "please enter a valid email address";
      isValid = false;
    }
    setEmailError(emailError);

    if (!/^([a-zA-Z0-9 ]){15,60}(\s)*$/i.test(subject)) {
      subjectError.errorText =
        "please enter a title betwen 15 and 60 characters";
      isValid = false;
    }
    setSubjectError(subjectError);

    if (!/^\S.*(?:\r?\n\s.*)*$/gmu.test(message)) {
      messageError.errorText =
        "Error: please describe your message in more than 50";
      isValid = false;
    }
    setMessageError(messageError);

    return isValid;
  };

  return (
    <>
      <form
        action="contact"
        className="form"
        id="form"
        method="POST"
        onSubmit={onSubmit}
      >
        <div className="label">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={name}
            id="name"
          />
          {Object.keys(nameError).map((error, index) => {
            return (
              <div className="box-msg" id="msg_name" key={index}>
                {nameError[error]}
              </div>
            );
          })}
        </div>

        <div className="label">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            value={email}
            id="email"
            placeholder="Enter your email address"
          />
          {Object.keys(emailError).map((error, index) => {
            return (
              <div className="box-msg" id="msg_email" key={index}>
                {emailError[error]}
              </div>
            );
          })}
        </div>

        <div className="label">
          <input
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            type="text"
            value={subject}
            placeholder="Subject"
            id="subject"
          />
          {Object.keys(subjectError).map((error, index) => {
            return (
              <div className="box-msg" id="msg_subject" key={index}>
                {subjectError[error]}
              </div>
            );
          })}
        </div>

        <div className="label">
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            value={message}
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          {Object.keys(messageError).map((error, index) => {
            return (
              <div className="box-msg" id="msg_message" key={index}>
                {messageError[error]}
              </div>
            );
          })}
        </div>

        <div className="send">
          <button className="button" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
