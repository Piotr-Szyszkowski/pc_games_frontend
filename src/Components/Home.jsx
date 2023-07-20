// import { useState } from "react";
import { Link } from "react-router-dom";
// import { getAllReviews } from "../Utils/api";
import "../Css/Home.css";
// import Loader from "./Loader";

const Home = () => {
  return (
    <section className="Home">
      <Link className="Encyclopedia-link" to="/reviews">
        <button className="Encyclopedia-button">Game-Encyclopedia</button>
      </Link>

      <p>Home placeholder</p>
      {/* <Loader /> */}
    </section>
  );
};

export default Home;
