import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.module.css";
import brandImg from "../../images/doctor.png";
import { Button } from "react-bootstrap";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className={`${styles.navigation} shadow`} expand="lg">
      <div className="container-lg">
        <Navbar.Brand className={styles.brand} href="/">
          <img src={brandImg} alt="" className={styles.brandImg} />
          <span className="text-light">Doctors Hub</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Link to="/">
              <div className="text-light d-flex align-items-center py-2 px-3">
                Home
              </div>
            </Link>

            <Link to="/login">
              <div className="text-light d-flex align-items-center py-2 px-3">
                {" "}
                Login
              </div>
            </Link>

            <Link>
              <div className="text-light d-flex align-items-center py-2 px-3">
                About
              </div>
            </Link>

            <Link
              className="text-light d-flex align-items-center ml-3"
              to="/search"
            >
              <Button variant="outline-light">Search</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
