// import { useState } from "react";
import { Link } from "react-router-dom";
// import { getAllReviews } from "../Utils/api";
import "../Css/Home.css";
// import Loader from "./Loader";

const Home = () => {
  return (
    <section className="Home">
      <Link to="/reviews">
        <button>Game-Encyclopedia</button>
      </Link>

      <p>Home placeholder</p>
      {/* <Loader /> */}
    </section>
  );
};

export default Home;
