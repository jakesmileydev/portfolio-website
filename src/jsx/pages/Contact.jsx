import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Contact(props) {
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
          className="contact-form"
          name="contact-form"
          method="POST"
          data-netlify="true"
        >
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
