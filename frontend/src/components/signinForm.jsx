import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignInForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const auth = getAuth();
  const navigate = useNavigate();

  const handleInput = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
    console.log(data);
  };

  const handleSubmit = async () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-7 col-md-6 m-auto">
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="text-center">
                <svg
                  className="mx-auto my-3 bi bi-person-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                className="form-control my-4 py-2"
                placeholder="Email"
                onChange={(event) => handleInput(event)}
              />
              <input
                type="password"
                name="password"
                className="form-control my-4 py-2"
                placeholder="Password"
                onChange={(event) => handleInput(event)}
              />
              <div className="text-center mt-3">
                <button className="btn btn-dark" onClick={handleSubmit}>
                  SignIn
                </button>
                <Link to="/signup/" className="nav-link">
                  Don't have an account ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
