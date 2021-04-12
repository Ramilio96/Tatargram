import React from "react";
import { Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-center"
      >
        <Navbar.Brand href="/">Tatargram</Navbar.Brand>
      </Navbar>
    </div>
  );
};
