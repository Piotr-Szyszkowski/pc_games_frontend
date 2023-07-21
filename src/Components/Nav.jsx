import { Link } from "react-router-dom";
import "../Css/Nav.css";
import mag_glass from "../Assets/Icons/mag_glass.png";
import SideMenu from "./SideMenu";

function Nav() {
  return (
    <section className="Nav">
      <SideMenu />
      <div className="hamburger">
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
    </section>
  );
}

export default Nav;
