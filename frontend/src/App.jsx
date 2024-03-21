import "./App.css";
import Navbar from "./components/navbar";
import SigninForm from "./components/signinForm";
import LoginForm from "./components/loginForm";

import React from "react";

function App() {
  return (
    <>
      <Navbar />

      <LoginForm />
      <SigninForm />
    </>
  );
}

export default App;
