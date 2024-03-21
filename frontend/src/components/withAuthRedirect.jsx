import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export default function withAuthRedirect(Component) {
  const AuthRedirect = (props) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged((authUser) => {
        if (authUser) {
          // User is signed in
          setUser(authUser);
        } else {
          // User is signed out
          navigate("/login"); // Redirect to login page
        }
      });

      return () => unsubscribe();
    }, [navigate]);

    return user ? <Component {...props} /> : null;
  };

  return AuthRedirect;
}
