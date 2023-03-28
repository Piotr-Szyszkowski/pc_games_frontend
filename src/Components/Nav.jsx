import { Link } from "react-router-dom";
import "../Css/Nav.css";

function Nav() {
  return (
    <section className="Nav">
      <Link className="home-link" to="/">
        <h1 className="main-title">
          <span className="green">PC</span>-Gamez
        </h1>
      </Link>
    </section>
  );
}

export default Nav;
