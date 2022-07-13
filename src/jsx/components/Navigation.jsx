import { Link } from "react-router-dom";

// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Resume PDF
import resume from "../../files/jake-smiley-resume.pdf";

export default function Navigation(props) {
  return (
    <nav
      className={`navigation__wrapper ${
        props.isMobileNavOpen ? "navigation__mobile-open" : ""
      }`}
    >
      <div className="navigation">
        <div className="navigation__logo">
          <span>WEB</span>
          <span>DEVELOPER</span>
          <span>JAKE</span>
          <span>SMILEY</span>
        </div>

        <ul className="navigation__links">
          <li>
            <Link onClick={() => props.setIsMobileNavOpen(false)} to="/">
              Work
            </Link>
          </li>
          <li>
            <Link onClick={() => props.setIsMobileNavOpen(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => props.setIsMobileNavOpen(false)} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <a
              onClick={() => props.setIsMobileNavOpen(false)}
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume (pdf)
            </a>
          </li>
        </ul>

        <ul className="navigation__socials">
          <li>
            <a
              href="https://www.linkedin.com/in/jakesmileydev"
              className="navigation__socials__link"
              target="_blank"
              rel="noreferrer"
              onClick={() => props.setIsMobileNavOpen(false)}
            >
              <FaLinkedinIn className="navigation__socials__icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/jakesmileydev"
              className="navigation__socials__link"
              target="_blank"
              rel="noreferrer"
              onClick={() => props.setIsMobileNavOpen(false)}
            >
              <FaGithub className="navigation__socials__icon" />
            </a>
          </li>
        </ul>

        <button
          className="navigation__close-mobile"
          onClick={() => props.setIsMobileNavOpen(false)}
        >
          <AiOutlineClose className="navigation__close-mobile__icon" />
        </button>
      </div>
    </nav>
  );
}
