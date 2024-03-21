import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { app } from "./firebaseConfig";

import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<h1>Kunj Modi</h1>} />

          <Route path="signin/" element={<SignInForm />} />

          <Route path="signup/" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
