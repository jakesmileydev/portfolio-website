import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Navigation from "./jsx/components/Navigation";
import Work from "./jsx/pages/Work";
import Contact from "./jsx/pages/Contact";
import About from "./jsx/pages/About";

export default function App() {
  const location = useLocation();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <Navigation
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />

      <div className="page">
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={<Work setIsMobileNavOpen={setIsMobileNavOpen} />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact setIsMobileNavOpen={setIsMobileNavOpen} />}
          />
          <Route
            exact
            path="/about"
            element={<About setIsMobileNavOpen={setIsMobileNavOpen} />}
          />
        </Routes>
      </div>
    </>
  );
}
