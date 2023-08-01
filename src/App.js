import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";
import SingleReview from "./Components/SingleReview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/review/:review_id" element={<SingleReview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
