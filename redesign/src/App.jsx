import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import SearchBar from "./componets/SearchBar";
import Employers from "./pages/Employers";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./componets/footer";
import Navbar from "./componets/Navbar";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-search" element={<SearchBar />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


