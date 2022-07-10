import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <span>FRONT END</span>
        <span>DEVELOPER</span>
        <span>JAKE</span>
        <span>SMILEY</span>
      </div>
      <ul className="navigation__links">
        <li>Work</li>
        <li>Contact</li>
        <li>Resume / pdf</li>
      </ul>
      <ul className="navigation__socials">
        <li>
          <a
            href="https://www.linkedin.com/in/jakesmileydev"
            className="navigation__socials__link"
          >
            <FaLinkedinIn className="navigation__socials__icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/jakesmileydev"
            className="navigation__socials__link"
          >
            <FaGithub className="navigation__socials__icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
