import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/reviews" element={<Reviews/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
