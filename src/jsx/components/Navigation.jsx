import { Link } from "react-router-dom";

// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import resume from "../../files/jake-smiley-resume.pdf";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <span>WEB</span>
        <span>DEVELOPER</span>
        <span>JAKE</span>
        <span>SMILEY</span>
      </div>
      <ul className="navigation__links">
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noreferrer">
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
          >
            <FaGithub className="navigation__socials__icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
