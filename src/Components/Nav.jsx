import { Link } from "react-router-dom";
import { useState } from "react";
import "../Css/Nav.css";
import mag_glass from "../Assets/Icons/mag_glass.png";
import SideMenu from "./SideMenu";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="Nav-and-Menu">
      <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="Nav">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <Link className="home-link" to="/">
          <h1 className="main-title">
            <span className="green">PC</span>-Gamez
          </h1>
        </Link>
        <div className="search-icon-container">
          <img alt="search icon" src={mag_glass} />
        </div>
      </div>
    </section>
  );
}

export default Nav;
