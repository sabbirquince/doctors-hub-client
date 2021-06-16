import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { signInWithGoogle } from "./Firebase";
import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    signInWithGoogle()
      .then((user) => {
        setLoggedIn(user.email);
        history.replace(from);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.login}>
      <div className="text-center text-light">
        <h1 className="pb-4">Login</h1>
        <Button onClick={googleSignIn} variant="outline-light">
          <FontAwesomeIcon icon={faGoogle} /> Login with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
