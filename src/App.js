import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AddNote from "./pages/AddNote";
import Mynotes from "./pages/Mynotes";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addnote" element={<AddNote />} />
        <Route path="/mynotes" element={<Mynotes />} />
        <Route path="/edit-note" element={<AddNote/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
