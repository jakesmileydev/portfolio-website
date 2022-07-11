import Navigation from "./jsx/components/Navigation";
import Work from "./jsx/pages/Work";
import Contact from "./jsx/pages/Contact";
import About from "./jsx/pages/About";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <div className="page">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Work />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
