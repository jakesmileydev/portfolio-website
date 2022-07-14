import { motion } from "framer-motion";

import Header from "../components/Header";

export default function Error() {
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
      <Header headerText="ERROR" />

      <main>
        <section className="error">
          <h2>Something went wrong with your form submission.</h2>
          <p>
            Sorry about that, try re-sending your message or e-mail me directly:
          </p>
          <p>hello@jakesmiley.com</p>
        </section>
      </main>
    </motion.div>
  );
}
