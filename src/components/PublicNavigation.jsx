import "./styles/PublicNavigation.css";
import CGAPPLogo from "../assets/images/cgBlue.png"
import { FaFacebookF,FaInstagram } from "react-icons/fa";

export default function PublicNavigation() {
  return (
    <nav className="nav row">
      <div>
        <a href="/">
          <img className="cgBlue" src={CGAPPLogo} alt="CG Logo" />
        </a>
      </div>
      <div className="nav__social row">
        <a href="/about" className="about__link">
          About
        </a>
        <a href="https://facebook.com/Contemporary Gospel">
            <FaFacebookF className="nav__icon" />
        </a>
        <a href="https://instagram.com/CG_Application ">
            <FaInstagram className="nav__icon" />
        </a>
      </div>
    </nav>
  );
}
