import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import Navigation from "./jsx/components/Navigation";
import Work from "./jsx/pages/Work";
import Contact from "./jsx/pages/Contact";
import About from "./jsx/pages/About";
import ThankYou from "./jsx/pages/ThankYou";

export default function App() {
  const location = useLocation();

  //  This state controls mobile navigation
  //  The setter is passed to all pages to build their headers
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  //  This state is in APP.js so the name entered in the form
  //  can be passed down to the thank-you page
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <>
      <Navigation
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <AnimatePresence exitBeforeEnter initial={false}>
        {/* <div className="page"> */}
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={<Work setIsMobileNavOpen={setIsMobileNavOpen} />}
          />
          <Route
            exact
            path="/contact"
            element={
              <Contact
                setIsMobileNavOpen={setIsMobileNavOpen}
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={<About setIsMobileNavOpen={setIsMobileNavOpen} />}
          />
          <Route
            exact
            path="/thank-you"
            element={
              <ThankYou
                setIsMobileNavOpen={setIsMobileNavOpen}
                senderName={formData.name}
              />
            }
          />
        </Routes>
        {/* </div> */}
      </AnimatePresence>
    </>
  );
}
