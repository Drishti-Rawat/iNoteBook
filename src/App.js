import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import AddNote from "./pages/AddNote";
import Mynotes from "./pages/Mynotes";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Homepage />} />
       
        <Route path="/addnote" element={<ProtectedRoute><AddNote /></ProtectedRoute> }/>
        <Route path="/mynotes" element={
          <ProtectedRoute> <Mynotes /> </ProtectedRoute>} />
        <Route path="/edit-note" element={<ProtectedRoute><AddNote/></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
