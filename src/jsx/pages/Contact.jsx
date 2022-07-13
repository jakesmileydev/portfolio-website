import Header from "../components/Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Contact(props) {
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thank-you"))
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
          {/* hidden input for Netlify */}
          <input type="hidden" name="form-name" value="smiley-contact" />

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="contact-form__input"
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className="contact-form__input"
            type="email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-form__textarea"
          />

          <button className="contact-form__button">Send</button>
        </form>
      </main>
    </motion.div>
  );
}
