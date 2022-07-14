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
        headerText="THANK YOU"
        setIsMobileNavOpen={props.setIsMobileNavOpen}
      />

      <main>
        <section className="thank-you">
          <h2>Hi {`${props.senderName}`}</h2>
          <p>Thanks for reaching out, I'll be in touch!</p>
        </section>
      </main>
    </motion.div>
  );
}
