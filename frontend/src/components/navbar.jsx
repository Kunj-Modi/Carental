import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then((response) => {
        navigate("/signin/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSignIn = () => {
    navigate("/signin/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="home/">
          Carental
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rent/">
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list/">
                List
              </a>
            </li>
          </ul>
          {user ? (
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
