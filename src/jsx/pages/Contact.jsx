import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header";

export default function Contact(props) {
  // For navigating to thank-you page after POST
  const navigate = useNavigate();

  // Encode form data
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleFormChange = (e) => {
    props.setFormData({ ...props.formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(props.formData);
  }, [props.formData]);

  const submitHandler = (e) => {
    e.preventDefault();
    // const myForm = document.getElementById("contact-form");
    // const formData = new FormData(myForm);
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => navigate("/thank-you"))
    //   .catch((error) => console.log(error));
    fetch("/", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "smiley-contact", ...props.formData }),
    })
      .then((response) => {
        if (response.ok === true) navigate("/thank-you");
        if (response.ok === false) navigate("/error");
      })
      .catch((error) => alert(error));
  };
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: {
          ease: "linear",
          duration: 0.3,
        },
        y: {
          ease: "easeOut",
          duration: 0.3,
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Header
        headerText="CONTACT"
        setIsMobileNavOpen={props.setIsMobileNavOpen}
      />

      <main>
        <form
          onSubmit={submitHandler}
          id="contact-form"
          className="contact-form"
          name="smiley-contact"
          method="POST"
          action="/thank-you"
        >
          {/* hidden input for Netlify -- value must match the name of the form in index.html*/}
          <input type="hidden" name="form-name" value="smiley-contact" />

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="contact-form__input"
            type="text"
            onChange={handleFormChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className="contact-form__input"
            type="email"
            onChange={handleFormChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-form__textarea"
            onChange={handleFormChange}
          />

          <button className="contact-form__button">Send</button>
        </form>
      </main>
    </motion.div>
  );
}
